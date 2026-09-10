import { MongoClient } from "mongodb";
import fs from "fs";
import path from "path";

// Load .env file if present
function loadEnv() {
  const envPath = path.resolve(process.cwd(), ".env");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf-8");
    for (const line of envContent.split("\n")) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
        const [key, ...values] = trimmed.split("=");
        const value = values.join("=").trim().replace(/^["']|["']$/g, "");
        if (key && !process.env[key.trim()]) {
          process.env[key.trim()] = value;
        }
      }
    }
  }
}

loadEnv();

const LOCAL_URI = process.env.LOCAL_MONGODB_URI || "mongodb://localhost:27017/philippine_destination";
const ATLAS_URI =
  process.argv.find((arg) => arg.startsWith("--atlas-uri="))?.split("=")[1] ||
  process.env.ATLAS_MONGODB_URI ||
  (process.env.MONGODB_URI?.includes("mongodb+srv://") || process.env.MONGODB_URI?.includes("mongodb.net") ? process.env.MONGODB_URI : undefined);

async function syncToAtlas() {
  console.log("=================================================");
  console.log(" 🚀 SYNCING LOCAL MONGODB TO MONGODB ATLAS");
  console.log("=================================================\n");

  if (!ATLAS_URI || (!ATLAS_URI.startsWith("mongodb+srv://") && !ATLAS_URI.includes("mongodb.net"))) {
    console.error("❌ ERROR: A valid MongoDB Atlas URI is required.");
    console.error("Please provide your Atlas URI in your .env file as ATLAS_MONGODB_URI or pass it as an argument:");
    console.error("  npx tsx scripts/sync-to-atlas.ts --atlas-uri=\"mongodb+srv://<username>:<password>@<cluster>.mongodb.net/philippine_destination\"");
    process.exit(1);
  }

  const localClient = new MongoClient(LOCAL_URI);
  const atlasClient = new MongoClient(ATLAS_URI);

  try {
    console.log("🔗 Connecting to Local MongoDB...");
    await localClient.connect();
    const localDbName = new URL(LOCAL_URI.replace("mongodb://", "http://")).pathname.slice(1) || "philippine_destination";
    const localDb = localClient.db(localDbName);
    console.log(`✅ Connected to Local DB: '${localDbName}'`);

    console.log("🔗 Connecting to MongoDB Atlas...");
    await atlasClient.connect();
    // Parse target db from Atlas URI
    let atlasDbName = "philippine_destination";
    try {
      const parsedPath = new URL(ATLAS_URI.replace("mongodb+srv://", "https://").replace("mongodb://", "http://")).pathname.slice(1);
      if (parsedPath) atlasDbName = parsedPath.split("?")[0];
    } catch (_) {}

    const atlasDb = atlasClient.db(atlasDbName);
    console.log(`✅ Connected to MongoDB Atlas DB: '${atlasDbName}'\n`);

    const collections = await localDb.listCollections().toArray();

    if (collections.length === 0) {
      console.log("⚠️ No collections found in local database.");
      return;
    }

    for (const colInfo of collections) {
      const colName = colInfo.name;
      if (colName.startsWith("system.")) continue;

      const docs = await localDb.collection(colName).find().toArray();
      console.log(`📦 Processing collection '${colName}' (${docs.length} documents)...`);

      if (docs.length > 0) {
        await atlasDb.collection(colName).deleteMany({});
        const result = await atlasDb.collection(colName).insertMany(docs);
        console.log(`  ✅ Synced '${colName}': ${result.insertedCount} documents uploaded to Atlas.`);
      } else {
        console.log(`  ℹ️  '${colName}' is empty, skipping document upload.`);
      }
    }

    console.log("\n=================================================");
    console.log(" 🎉 MONGODB ATLAS SYNC COMPLETED SUCCESSFULLY!");
    console.log("=================================================");
  } catch (error: any) {
    console.error("❌ Sync to Atlas failed:", error?.message || error);
  } finally {
    await localClient.close();
    await atlasClient.close();
    process.exit(0);
  }
}

syncToAtlas();
