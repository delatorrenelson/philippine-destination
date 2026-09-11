import { auth, connectDB, client, DestinationModel, ArticleModel, CommentModel } from "../api/db/index.js";

async function seedMongoDB() {
  console.log("Checking MongoDB Atlas database collections via Mongoose...");

  try {
    await connectDB();

    // 1. Seed Admin User via BetterAuth
    console.log("1. Checking Admin User via BetterAuth...");
    try {
      const result = await auth.api.signUpEmail({
        body: {
          name: "admin",
          email: "admin@email.com",
          password: "admin",
        },
      });
      console.log("Admin user created successfully:", result);
    } catch (error: any) {
      if (error?.message?.includes("already exist") || error?.status === 422) {
        console.log("Admin user 'admin@email.com' already exists.");
      } else {
        console.warn("Notice seeding admin user:", error?.message || error);
      }
    }

    // 2. Report collection counts in MongoDB
    const destCount = await DestinationModel.countDocuments();
    console.log(`'destinations' collection: ${destCount} documents.`);

    const artCount = await ArticleModel.countDocuments();
    console.log(`'articles' collection: ${artCount} documents.`);

    const commentCount = await CommentModel.countDocuments();
    console.log(`'comments' collection: ${commentCount} documents.`);

    console.log("MongoDB database check complete!");
  } catch (err) {
    console.error("Error checking MongoDB database:", err);
  } finally {
    await client.close();
    process.exit(0);
  }
}

seedMongoDB();
