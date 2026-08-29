import { Link } from "react-router";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Page Not Found | Philippine Destination" },
    { name: "description", content: "The page you are looking for does not exist." },
  ];
};

export default function NotFoundRoute() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-black text-emerald-700 dark:text-emerald-400">404</h1>
      <h2 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">Page Not Found</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
        Sorry, the page or destination story you were trying to reach could not be found.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-full transition-all shadow-md"
      >
        Return to Home
      </Link>
    </div>
  );
}
