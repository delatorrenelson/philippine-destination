import { MongoClient } from "mongodb";
import fs from "fs";
import path from "path";

// Load .env without dotenv dependency
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

const LOCAL_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
const TARGET_DB = "philippine_destination";
const LEGACY_DB = "philippine-destination";

async function cleanupAndVerify() {
  console.log("=================================================");
  console.log(" 🔧 LOCAL DATABASE CLEANUP & VERIFICATION");
  console.log("=================================================\n");

  const client = new MongoClient(LOCAL_URI);

  try {
    await client.connect();

    // 1. Drop legacy hyphenated DB if it exists
    const adminDb = client.db("admin");
    const dbList = await adminDb.admin().listDatabases();
    const legacyExists = dbList.databases.some((d: any) => d.name === LEGACY_DB);

    if (legacyExists) {
      await client.db(LEGACY_DB).dropDatabase();
      console.log(`  🗑️  Dropped legacy database '${LEGACY_DB}'`);
    } else {
      console.log(`  ✅ Legacy database '${LEGACY_DB}' does not exist — nothing to drop.`);
    }

    // 2. Verify target DB collections
    const targetDb = client.db(TARGET_DB);
    const collections = await targetDb.listCollections().toArray();

    console.log(`\n📊 Current collections in '${TARGET_DB}':`);
    for (const col of collections) {
      const count = await targetDb.collection(col.name).countDocuments();
      console.log(`  - ${col.name}: ${count} documents`);
    }

    if (collections.length === 0) {
      console.log("  ⚠️  No collections found. Run: npm run db:seed");
    }

    console.log("\n=================================================");
    console.log(" 🎉 CLEANUP COMPLETE!");
    console.log(`    Active database: ${TARGET_DB}`);
    console.log("=================================================");
  } catch (error: any) {
    console.error("❌ Cleanup failed:", error?.message || error);
  } finally {
    await client.close();
    process.exit(0);
  }
}

cleanupAndVerify();
