import ArticleDetail from "../pages/ArticleDetail";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Destination Article | Philippine Destination" },
    { name: "description", content: "Read detailed travel guide and island experiences." },
  ];
};

export default function ArticleDetailRoute() {
  return <ArticleDetail />;
}
