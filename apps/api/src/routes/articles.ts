import { Router, Request, Response, NextFunction } from "express";
import { ArticleModel, connectToDatabase } from "../config/index.js";

const router = Router();

// GET /api/v1/articles/search
router.get("/", async (req: Request, res: Response, next: NextFunction) => {  
  try {
    await connectToDatabase();

    const {
      q,
      title,
      author,
      destinationName,
      category,
      location,
      page = 1,
      limit = 20,
      per_page = 5,
    } = req.query;

    const queryFilter: Record<string, any> = {};

    // 1. Global text search (q) matching across multiple fields
    if (q && typeof q === "string") {
      const searchRegex = new RegExp(q.trim(), "i");
      queryFilter.$or = [
        { title: searchRegex },
        { destinationName: searchRegex },
        { location: searchRegex },
        { category: searchRegex },
        { "author.name": searchRegex },
        { authorId: searchRegex },
      ];
    }

    // 2. Field-specific targeted filters
    if (title && typeof title === "string") {
      queryFilter.title = new RegExp(title.trim(), "i");
    }

    if (author && typeof author === "string") {
      const authorRegex = new RegExp(author.trim(), "i");
      queryFilter.$or = [
        { authorId: authorRegex },
        { "author.name": authorRegex },
      ];
    }

    if (destinationName && typeof destinationName === "string") {
      queryFilter.destinationName = new RegExp(destinationName.trim(), "i");
    }

    if (category && typeof category === "string") {
      queryFilter.category = new RegExp(category.trim(), "i");
    }

    if (location && typeof location === "string") {
      queryFilter.location = new RegExp(location.trim(), "i");
    }

    // 3. Pagination setup with defaults (limit=20, page=1, per_page=5)
    const pageNum = Math.max(1, parseInt(page as string, 10) || 1);
    
    // Priority: explicit per_page query -> explicit limit query -> default 20
    const itemsPerPage = req.query.per_page
      ? Math.max(1, parseInt(per_page as string, 10) || 5)
      : Math.max(1, parseInt(limit as string, 10) || 20);

    const skip = (pageNum - 1) * itemsPerPage;

    // 4. Execute query & fetch total count concurrently
    const [articles, total] = await Promise.all([
      ArticleModel.find(queryFilter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(itemsPerPage)
        .lean(),
      ArticleModel.countDocuments(queryFilter),
    ]);

    const totalPages = Math.ceil(total / itemsPerPage);

    return res.status(200).json({
      status: "success",
      results: articles.length,
      pagination: {
        total,
        page: pageNum,
        per_page: itemsPerPage,
        total_pages: totalPages,
        has_next_page: pageNum < totalPages,
        has_prev_page: pageNum > 1,
      },
      data: articles,
    });
  } catch (error) {
    next(error);
  }
});

export default router;