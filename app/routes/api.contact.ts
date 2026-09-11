import type { ActionFunctionArgs } from "react-router";
import { connectDB, ContactModel } from "@db";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    await connectDB();
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const contactEntry = await ContactModel.create({
      id: `contact-${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      status: "new",
      createdAt: new Date(),
    });

    return Response.json({ success: true, contact: contactEntry });
  } catch (error: any) {
    console.error("Error saving contact message via Mongoose:", error);
    return Response.json(
      { error: "Failed to save contact message to database." },
      { status: 500 }
    );
  }
}
