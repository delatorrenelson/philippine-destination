import React, { useState } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  type LinksFunction,
} from "react-router";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import stylesheet from "./index.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Scoutie+Sans:ital,wght@0,300..800;1,300..800&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-50/50 dark:bg-gray-950 text-gray-900 dark:text-white font-sans antialiased">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export interface RootOutletContext {
  globalSearch: string;
  setGlobalSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function App() {
  const [globalSearch, setGlobalSearch] = useState<string>("");

  return (
    <div className="App min-h-screen bg-gray-50/50 dark:bg-gray-950 text-gray-900 dark:text-white flex flex-col font-sans">
      <Header onSearch={setGlobalSearch} />
      <Navbar />
      <main className="flex-1">
        <Outlet context={{ globalSearch, setGlobalSearch } satisfies RootOutletContext} />
      </main>
      <Footer />
    </div>
  );
}

export function ErrorBoundary({ error }: { error: unknown }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : `${error.status}`;
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold">{message}</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{details}</p>
      {stack && (
        <pre className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded overflow-x-auto text-xs max-w-full">
          <code>{stack}</code>
        </pre>
      )}
    </div>
  );
}
