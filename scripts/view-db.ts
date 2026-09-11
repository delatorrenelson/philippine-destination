import { db, client } from "../db";

async function viewDatabase() {
  console.log("=========================================");
  console.log("       LOCAL MONGODB DATABASE DATA       ");
  console.log("=========================================\n");

  try {
    const users = await db.collection("user").find().toArray();
    console.log("🟢 REGISTERED USERS ('user' collection):");
    console.table(
      users.map((u) => ({
        ID: u._id.toString(),
        Name: u.name,
        Email: u.email,
        Created: u.createdAt,
      }))
    );

    const sessions = await db.collection("session").find().toArray();
    console.log("\n🔑 ACTIVE SESSIONS ('session' collection):");
    console.table(
      sessions.map((s) => ({
        SessionID: s._id.toString(),
        UserID: s.userId?.toString(),
        IPAddress: s.ipAddress || "N/A",
        UserAgent: s.userAgent ? s.userAgent.slice(0, 40) + "..." : "N/A",
        ExpiresAt: s.expiresAt,
      }))
    );

    console.log("\n📊 COLLECTION TOTALS:");
    const collections = ["user", "account", "session", "comments", "contacts", "bookings", "destinations", "articles"];
    for (const colName of collections) {
      const count = await db.collection(colName).countDocuments();
      console.log(`  - ${colName}: ${count} documents`);
    }

    console.log("\n=========================================");
  } catch (err) {
    console.error("Error inspecting database:", err);
  } finally {
    await client.close();
    process.exit(0);
  }
}

viewDatabase();
