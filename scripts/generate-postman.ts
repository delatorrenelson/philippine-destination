import fs from "fs";
import path from "path";

const postmanCollection = {
  info: {
    name: "Philippine Destination Express API",
    description: "Postman collection for testing the Express.js & MongoDB Atlas API endpoints.",
    schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
  },
  variable: [
    {
      key: "baseUrl",
      value: "http://localhost:5000",
      type: "string",
    },
  ],
  item: [
    {
      name: "Health Check",
      item: [
        {
          name: "Get API Health",
          request: {
            method: "GET",
            header: [],
            url: {
              raw: "{{baseUrl}}/api/health",
              host: ["{{baseUrl}}"],
              path: ["api", "health"],
            },
            description: "Check if Express API server is running.",
          },
          response: [],
        },
      ],
    },
    {
      name: "Destinations & Stories",
      item: [
        {
          name: "Get All Destinations",
          request: {
            method: "GET",
            header: [],
            url: {
              raw: "{{baseUrl}}/api/destinations",
              host: ["{{baseUrl}}"],
              path: ["api", "destinations"],
            },
            description: "Fetch all tourist destinations from MongoDB.",
          },
          response: [],
        },
        {
          name: "Get All Articles",
          request: {
            method: "GET",
            header: [],
            url: {
              raw: "{{baseUrl}}/api/destinations/articles",
              host: ["{{baseUrl}}"],
              path: ["api", "destinations", "articles"],
            },
            description: "Fetch all travel guide articles from MongoDB.",
          },
          response: [],
        },
        {
          name: "Get Formatted Places Feed",
          request: {
            method: "GET",
            header: [],
            url: {
              raw: "{{baseUrl}}/api/destinations/places",
              host: ["{{baseUrl}}"],
              path: ["api", "destinations", "places"],
            },
            description: "Fetch place feeds formatted for Home and Article Detail pages.",
          },
          response: [],
        },
      ],
    },
    {
      name: "Comments",
      item: [
        {
          name: "Get All Comments",
          request: {
            method: "GET",
            header: [],
            url: {
              raw: "{{baseUrl}}/api/comments",
              host: ["{{baseUrl}}"],
              path: ["api", "comments"],
            },
            description: "Fetch all reader comments from MongoDB.",
          },
          response: [],
        },
        {
          name: "Get Comments By Article ID",
          request: {
            method: "GET",
            header: [],
            url: {
              raw: "{{baseUrl}}/api/comments?articleId=art-001",
              host: ["{{baseUrl}}"],
              path: ["api", "comments"],
              query: [
                {
                  key: "articleId",
                  value: "art-001",
                },
              ],
            },
            description: "Fetch comments filtered for a specific article.",
          },
          response: [],
        },
        {
          name: "Post New Comment",
          request: {
            method: "POST",
            header: [
              {
                key: "Content-Type",
                value: "application/json",
              },
            ],
            body: {
              mode: "raw",
              raw: JSON.stringify(
                {
                  articleId: "art-001",
                  destinationId: "boracay",
                  author: "Juan Dela Cruz",
                  text: "Boracay is truly breathtaking! Highly recommend White Beach sunset.",
                  avatar: "https://i.pravatar.cc/150?img=12",
                  userId: "user-123",
                },
                null,
                2
              ),
            },
            url: {
              raw: "{{baseUrl}}/api/comments",
              host: ["{{baseUrl}}"],
              path: ["api", "comments"],
            },
            description: "Submit a new comment to MongoDB.",
          },
          response: [],
        },
      ],
    },
    {
      name: "Bookings & Contact",
      item: [
        {
          name: "Submit Tour Booking",
          request: {
            method: "POST",
            header: [
              {
                key: "Content-Type",
                value: "application/json",
              },
            ],
            body: {
              mode: "raw",
              raw: JSON.stringify(
                {
                  destinationId: "boracay",
                  destinationName: "Boracay Island",
                  fullName: "Maria Santos",
                  email: "maria@example.com",
                  phone: "+639171234567",
                  guests: 2,
                  startDate: "2026-10-15",
                  notes: "Looking forward to island hopping tour!",
                },
                null,
                2
              ),
            },
            url: {
              raw: "{{baseUrl}}/api/booking",
              host: ["{{baseUrl}}"],
              path: ["api", "booking"],
            },
            description: "Submit a tour reservation.",
          },
          response: [],
        },
        {
          name: "Submit Contact Message",
          request: {
            method: "POST",
            header: [
              {
                key: "Content-Type",
                value: "application/json",
              },
            ],
            body: {
              mode: "raw",
              raw: JSON.stringify(
                {
                  name: "Alex Johnson",
                  email: "alex@example.com",
                  subject: "Custom Itinerary Inquiry",
                  message: "Hi, I would like to inquire about a 7-day Palawan tour itinerary.",
                },
                null,
                2
              ),
            },
            url: {
              raw: "{{baseUrl}}/api/contact",
              host: ["{{baseUrl}}"],
              path: ["api", "contact"],
            },
            description: "Submit a message via the contact form.",
          },
          response: [],
        },
      ],
    },
    {
      name: "Authentication (BetterAuth)",
      item: [
        {
          name: "Sign Up (Email)",
          request: {
            method: "POST",
            header: [
              {
                key: "Content-Type",
                value: "application/json",
              },
              {
                key: "Origin",
                value: "http://localhost:5173",
              },
            ],
            body: {
              mode: "raw",
              raw: JSON.stringify(
                {
                  name: "Test Traveler",
                  email: "traveler@example.com",
                  password: "password123",
                },
                null,
                2
              ),
            },
            url: {
              raw: "{{baseUrl}}/api/auth/sign-up/email",
              host: ["{{baseUrl}}"],
              path: ["api", "auth", "sign-up", "email"],
            },
            description: "Register a new user account with BetterAuth.",
          },
          response: [],
        },
        {
          name: "Sign In (Email)",
          request: {
            method: "POST",
            header: [
              {
                key: "Content-Type",
                value: "application/json",
              },
              {
                key: "Origin",
                value: "http://localhost:5173",
              },
            ],
            body: {
              mode: "raw",
              raw: JSON.stringify(
                {
                  email: "admin2@email.com",
                  password: "admin2",
                },
                null,
                2
              ),
            },
            url: {
              raw: "{{baseUrl}}/api/auth/sign-up/email",
              host: ["{{baseUrl}}"],
              path: ["api", "auth", "sign-in", "email"],
            },
            description: "Sign in with existing user credentials.",
          },
          response: [],
        },
        {
          name: "Get Current Session",
          request: {
            method: "GET",
            header: [
              {
                key: "Origin",
                value: "http://localhost:5173",
              },
            ],
            url: {
              raw: "{{baseUrl}}/api/auth/get-session",
              host: ["{{baseUrl}}"],
              path: ["api", "auth", "get-session"],
            },
            description: "Query current authenticated user session.",
          },
          response: [],
        },
        {
          name: "Sign Out",
          request: {
            method: "POST",
            header: [
              {
                key: "Content-Type",
                value: "application/json",
              },
              {
                key: "Origin",
                value: "http://localhost:5173",
              },
            ],
            url: {
              raw: "{{baseUrl}}/api/auth/sign-out",
              host: ["{{baseUrl}}"],
              path: ["api", "auth", "sign-out"],
            },
            description: "Sign out current session.",
          },
          response: [],
        },
      ],
    },
  ],
};

const outputPath = path.join(process.cwd(), "postman-collection.json");
fs.writeFileSync(outputPath, JSON.stringify(postmanCollection, null, 2), "utf8");

console.log(`✅ Postman Collection successfully generated at: ${outputPath}`);
