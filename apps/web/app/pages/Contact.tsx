import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Contact() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Failed to submit message. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting contact form to MongoDB:", err);
      setErrorMsg("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-12 text-white space-y-4 shadow-xl">
        <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Contact & Community</h1>
        <p className="text-sm sm:text-base text-emerald-100 max-w-2xl">
          Have questions about island travel, local permits, or submitting your own story? Reach out to our team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Send Us a Message</h3>

          {errorMsg && (
            <div className="p-4 bg-red-50 text-red-700 rounded-xl text-xs font-medium">
              {errorMsg}
            </div>
          )}

          {submitted ? (
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 text-emerald-800 dark:text-emerald-300 space-y-2">
              <h4 className="font-bold text-sm">✓ Message Received & Saved!</h4>
              <p className="text-xs">Thank you for reaching out. Our team will respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask a question or suggest a new island destination..."
                  className="w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full py-3 font-bold rounded-xl shadow-md">
                <Send className="w-4 h-4 mr-2" />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </Button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Community Contact Info</h3>

            <div className="space-y-3 text-xs text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Manila & Cebu Hubs, Philippines</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>hello@philippinedestination.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>+63 (2) 8123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
