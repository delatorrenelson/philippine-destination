export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  role: string;
  isForeign?: boolean;
  location?: string;
  bio?: string;
  joinedDate?: string;
}

export interface Destination {
  id: string;
  name: string;
  province: string;
  region: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  popularSpots: string[];
  location: string;
}

export interface ArticleAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  destinationId: string;
  destinationName: string;
  location: string;
  category: string;
  authorId: string;
  author: ArticleAuthor;
  excerpt: string;
  fullContent: string;
  heroImage: string;
  rating: number;
  readTime: string;
  publishedAt: string;
  tags: string[];
}

export interface Comment {
  id: string;
  articleId: string;
  destinationId: string;
  userId: string;
  author: string;
  avatar: string;
  date: string;
  text: string;
  likes: number;
}

export interface Place {
  id: string;
  articleId: string;
  destination: string;
  title: string;
  category: string;
  excerpt: string;
  description: string;
  fullContent: string;
  img: string;
  location: string;
  rating: number;
  featured: boolean;
  publishedAt: string;
  readTime: string;
  author: ArticleAuthor;
  tags: string[];
  comments: Comment[];
}

export interface NavItem {
  txt: string;
  href: string;
}
