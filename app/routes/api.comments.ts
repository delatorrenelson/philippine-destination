import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router";
import { connectDB } from "../lib/db.js";
import { CommentModel } from "../models/Comment";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const articleId = url.searchParams.get("articleId");

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
    return Response.json({ comments: formatted });
  } catch (error) {
    console.error("Error fetching comments via Mongoose:", error);
    return Response.json({ comments: [] });
  }
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    await connectDB();
    const body = await request.json();
    const { articleId, destinationId, author, text, avatar, userId } = body;

    if (!author || !text) {
      return Response.json({ error: "Author and text are required" }, { status: 400 });
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

    return Response.json({ success: true, comment: newComment });
  } catch (error: any) {
    console.error("Error saving comment via Mongoose:", error);
    return Response.json({ error: "Failed to save comment to database" }, { status: 500 });
  }
}
