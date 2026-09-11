import type { ActionFunctionArgs } from "react-router";
import { connectDB } from "../lib/db.js";
import { BookingModel } from "../models/Booking";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    await connectDB();
    const body = await request.json();
    const { destination, travelDate, guests, guestName, guestEmail } = body;

    if (!destination || !travelDate || !guests) {
      return Response.json(
        { error: "Destination, travel date, and guests selection are required." },
        { status: 400 }
      );
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

    return Response.json({ success: true, booking: bookingEntry });
  } catch (error: any) {
    console.error("Error saving booking via Mongoose:", error);
    return Response.json(
      { error: "Failed to save booking to database." },
      { status: 500 }
    );
  }
}
