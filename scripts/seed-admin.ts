import { auth } from "../app/lib/auth";

async function seedAdminUser() {
  console.log("Seeding test user...");
  try {
    const result = await auth.api.signUpEmail({
      body: {
        name: "admin",
        email: "admin@email.com",
        password: "admin",
      },
    });
    console.log("Successfully created test user:", result);
  } catch (error: any) {
    if (error?.message?.includes("already exist") || error?.status === 422) {
      console.log("Test user 'admin@email.com' already exists.");
    } else {
      console.error("Failed to seed admin user:", error);
    }
  }
}

seedAdminUser();
