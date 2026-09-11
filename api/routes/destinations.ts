import { Router, Request, Response } from "express";
import { connectDB, DestinationModel, ArticleModel, CommentModel } from "../db/index.js";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    await connectDB();
    const destinations = await DestinationModel.find().exec();
    return res.json({ destinations });
  } catch (error: any) {
    console.error("Express destinations GET error:", error);
    return res.status(500).json({ error: "Failed to fetch destinations from database" });
  }
});

router.get("/articles", async (_req: Request, res: Response) => {
  try {
    await connectDB();
    const articles = await ArticleModel.find().exec();
    return res.json({ articles });
  } catch (error: any) {
    console.error("Express articles GET error:", error);
    return res.status(500).json({ error: "Failed to fetch articles from database" });
  }
});

router.get("/places", async (_req: Request, res: Response) => {
  try {
    await connectDB();
    const articles = await ArticleModel.find().exec();
    const comments = await CommentModel.find().exec();

    const places = articles.map((art) => {
      const artComments = comments
        .filter((c) => c.articleId === art.id)
        .map((c) => ({
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

      return {
        id: art.slug,
        articleId: art.id,
        destination: art.destinationName,
        title: art.title,
        category: art.category,
        excerpt: art.excerpt,
        description: art.excerpt,
        fullContent: art.fullContent,
        img: art.heroImage,
        location: art.location,
        rating: art.rating,
        featured: art.id === "art-001" || art.id === "art-005" || art.id === "art-008",
        publishedAt: art.publishedAt,
        readTime: art.readTime,
        author: art.author,
        tags: art.tags,
        comments: artComments,
      };
    });

    return res.json({ places });
  } catch (error: any) {
    console.error("Express places GET error:", error);
    return res.status(500).json({ error: "Failed to fetch places from database" });
  }
});

export default router;
