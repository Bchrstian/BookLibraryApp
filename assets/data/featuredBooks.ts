// assets/data/featuredBooks.ts

import { ImageSourcePropType } from "react-native";

// Define the type for a single book item
export interface BookItem {
  id: string;
  title: string;
  author: string;
  cover: ImageSourcePropType;
  description: string;
  rating: number;
}

// Sample data for featured books
export const featuredBooks: BookItem[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: require("../../assets/coverpage/cover1.jpg"),
    description: "A classic novel of the Roaring Twenties.",
    rating: 4,
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    cover: require("../../assets/coverpage/cover2.jpg"),
    description:
      "A dystopian social science fiction novel and cautionary tale.",
    rating: 5,
  },
  {
    id: "3",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: require("../../assets/coverpage/cover3.jpg"),
    description:
      "A novel about the serious issues of rape and racial inequality.",
    rating: 5,
  },
  {
    id: "4",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    cover: require("../../assets/coverpage/cover4.jpg"),
    description: "A story about teenage angst and alienation.",
    rating: 4,
  },
  {
    id: "5",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: require("../../assets/coverpage/cover5.jpg"),
    description: "A romantic novel that critiques the British landed gentry.",
    rating: 4,
  },
  {
    id: "6",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover: require("../../assets/coverpage/cover6.jpg"),
    description:
      "A fantasy novel and children’s classic about an adventure in Middle-earth.",
    rating: 5,
  },
  {
    id: "7",
    title: "Moby Dick",
    author: "Herman Melville",
    cover: require("../../assets/coverpage/cover7.jpg"),
    description:
      "A narrative of the adventures of the wandering sailor Ishmael.",
    rating: 4,
  },
];
