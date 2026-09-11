import { Router, Request, Response } from "express";
import { connectDB, ContactModel } from "@db";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    await connectDB();
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required." });
    }

    const contactEntry = await ContactModel.create({
      id: `contact-${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      status: "new",
      createdAt: new Date(),
    });

    return res.json({ success: true, contact: contactEntry });
  } catch (error: any) {
    console.error("Express Contact POST Error:", error);
    return res
      .status(500)
      .json({ error: "Failed to save contact message to database." });
  }
});

export default router;
