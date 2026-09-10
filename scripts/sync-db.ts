import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI_BASE || "mongodb://localhost:27017";
const SOURCE_DB_NAME = "philippine-destination";
const TARGET_DB_NAME = "philippine_destination";

async function syncDatabase() {
  console.log(`=================================================`);
  console.log(` 🚀 SYNCING DATABASE: ${SOURCE_DB_NAME} -> ${TARGET_DB_NAME}`);
  console.log(`=================================================\n`);

  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    const sourceDb = client.db(SOURCE_DB_NAME);
    const targetDb = client.db(TARGET_DB_NAME);

    const collections = await sourceDb.listCollections().toArray();

    for (const colInfo of collections) {
      const colName = colInfo.name;
      const docs = await sourceDb.collection(colName).find().toArray();

      if (docs.length > 0) {
        // Clear existing target collection
        await targetDb.collection(colName).deleteMany({});
        // Copy documents
        const result = await targetDb.collection(colName).insertMany(docs);
        console.log(`  ✅ Synced '${colName}' collection: ${result.insertedCount} documents`);
      } else {
        console.log(`  ℹ️  '${colName}' collection is empty, skipped.`);
      }
    }

    console.log(`\n=================================================`);
    console.log(` 🎉 DATABASE SYNC COMPLETE!`);
    console.log(` target database: ${TARGET_DB_NAME}`);
    console.log(`=================================================`);
  } catch (error) {
    console.error("❌ Sync failed with error:", error);
  } finally {
    await client.close();
    process.exit(0);
  }
}

syncDatabase();
