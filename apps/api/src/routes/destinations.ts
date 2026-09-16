import { Router, Request, Response } from "express";
import { connectToDatabase, DestinationModel } from "../config/index.js";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    await connectToDatabase();
    
    const query = req.query.q as string;
    let destinations;

    if (query) {      
      destinations = await DestinationModel.find({
        $or: [
          { name: { $regex: query, $options: "i" } },
          { location: { $regex: query, $options: "i" } },
          { description: { $regex: query, $options: "i" } },
        ],
      }).exec();      
    } else {      
      destinations = await DestinationModel.find().exec();
    }

    return res.setHeader("Content-Type", "application/json").send(
      JSON.stringify({ count: destinations.length, destinations }, null, 2)
    );
  } catch (error: any) {
    console.error("Express destinations error:", error);
    return res.status(500).json({ error: "Failed to fetch destinations from database" });
  }
});

export default router;
