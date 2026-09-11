import { Router, Request, Response } from "express";
import { connectDB } from "../../app/lib/db.js";
import { BookingModel } from "../../app/models/Booking";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    await connectDB();
    const { destination, travelDate, guests, guestName, guestEmail } = req.body;

    if (!destination || !travelDate || !guests) {
      return res.status(400).json({
        error: "Destination, travel date, and guests selection are required.",
      });
    }

    const bookingEntry = await BookingModel.create({
      id: `booking-${Date.now()}`,
      destination,
      travelDate,
      guests,
      guestName: guestName || "Guest Traveler",
      guestEmail: guestEmail || "",
      status: "pending",
      createdAt: new Date(),
    });

    return res.json({ success: true, booking: bookingEntry });
  } catch (error: any) {
    console.error("Express Booking POST Error:", error);
    return res
      .status(500)
      .json({ error: "Failed to save booking to database." });
  }
});

export default router;
