import { Router, Request, Response } from "express";
import { connectDB, CommentModel } from "../db/index.js";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const articleId = req.query.articleId as string | undefined;

  try {
    await connectDB();
    const filter = articleId ? { articleId } : {};
    const dbComments = await CommentModel.find(filter).sort({ createdAt: -1 }).exec();

    const formatted = dbComments.map((c) => ({
      id: c.id,
      articleId: c.articleId,
      destinationId: c.destinationId,
      userId: c.userId,
      author: c.author,
      avatar: c.avatar,
      date: c.date,
      text: c.text,
      likes: c.likes || 0,
    }));

    return res.json({ comments: formatted });
  } catch (error) {
    console.error("Express Comments GET Error:", error);
    return res.status(500).json({ error: "Failed to fetch comments from database" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    await connectDB();
    const { articleId, destinationId, author, text, avatar, userId } = req.body;

    if (!author || !text) {
      return res.status(400).json({ error: "Author and text are required" });
    }

    const commentId = `comment-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    const newComment = await CommentModel.create({
      id: commentId,
      articleId: articleId || "general",
      destinationId: destinationId || "general",
      userId: userId || "guest-user",
      author: author.trim(),
      avatar: avatar || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50) + 1}`,
      date: new Date().toISOString().split("T")[0],
      text: text.trim(),
      likes: 0,
      createdAt: new Date(),
    });

    return res.json({ success: true, comment: newComment });
  } catch (error: any) {
    console.error("Express Comments POST Error:", error);
    return res.status(500).json({ error: "Failed to save comment to database" });
  }
});

export default router;
