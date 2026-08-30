import React, { useState } from "react";
import { useParams, Link } from "react-router";
import { Calendar, Users, MapPin, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Booking() {
  const { destination } = useParams<{ destination?: string }>();
  const [travelDate, setTravelDate] = useState<string>("");
  const [guests, setGuests] = useState<string>("1 Traveler (Solo Backpacker)");
  const [guestName, setGuestName] = useState<string>("");
  const [guestEmail, setGuestEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!travelDate || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    const destName = destination?.replace("-", " ") || "Philippine Adventure";

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination: destName,
          travelDate,
          guests,
          guestName,
          guestEmail,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Failed to confirm booking.");
      }
    } catch (err) {
      console.error("Error submitting booking to MongoDB:", err);
      setErrorMsg("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl space-y-6">
        <div className="space-y-2 text-center">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Island Booking Concierge
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white capitalize">
            Reserve Tour: {destination?.replace("-", " ") || "Philippine Adventure"}
          </h1>
          <p className="text-xs text-gray-500 max-w-md mx-auto">
            Book licensed local guides, island-hopping boats, and environmental permits seamlessly.
          </p>
        </div>

        {errorMsg && (
          <div className="p-4 bg-red-50 text-red-700 rounded-xl text-xs font-medium">
            {errorMsg}
          </div>
        )}

        {submitted ? (
          <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 text-emerald-800 dark:text-emerald-300 text-center space-y-3">
            <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-base">Booking Confirmation Request Saved!</h4>
            <p className="text-xs max-w-md mx-auto">
              Your reservation details have been submitted into our system. Our local island coordinator will contact you via email shortly.
            </p>
            <div className="pt-2">
              <Link to="/destinations">
                <Button size="sm" variant="outline" className="rounded-xl text-xs font-bold">
                  Explore More Destinations
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. Alex Traveler"
                  className="w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Your Email Address</label>
                <input
                  type="email"
                  required
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  placeholder="alex@example.com"
                  className="w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Target Travel Date</label>
              <input
                type="date"
                required
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Number of Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option>1 Traveler (Solo Backpacker)</option>
                <option>2 Travelers (Couple)</option>
                <option>3 - 5 Travelers (Group)</option>
                <option>6+ Travelers (Private Charter)</option>
              </select>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full py-3 font-bold rounded-xl shadow-md mt-4">
              {isSubmitting ? "Processing Reservation..." : "Check Availability & Confirm Booking"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
