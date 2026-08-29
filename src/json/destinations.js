import destinationsData from "./destinations.json";
import usersData from "./users.json";
import articlesData from "./articles.json";
import commentsData from "./comments.json";

// Map articles to the places structure expected by legacy and current UI components
const places = articlesData.map((art) => {
  const artComments = commentsData.filter((c) => c.articleId === art.id);
  return {
    id: art.slug,
    articleId: art.id,
    destination: art.destinationName,
    title: art.title,
    category: art.category,
    excerpt: art.excerpt,
    description: art.excerpt,
    fullContent: art.fullContent,
    img: art.heroImage,
    location: art.location,
    rating: art.rating,
    featured: art.id === "art-001" || art.id === "art-005" || art.id === "art-008",
    publishedAt: art.publishedAt,
    readTime: art.readTime,
    author: art.author,
    tags: art.tags,
    comments: artComments
  };
});

const categories = [
  "All Stories",
  "Beaches & Islands",
  "Surfing & Adventure",
  "Culture & Heritage",
  "Diving & Marine Life",
  "Nature & Wildlife",
  "Road Trips & Coastal",
  "Mountain Getaways"
];

export {
  destinationsData as destinations,
  usersData as users,
  articlesData as articles,
  commentsData as comments,
  places,
  categories
};