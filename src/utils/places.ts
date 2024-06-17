import { ColorType } from "../types";
import { placeTags } from "./tags";

export const places = [
  {
    _id: "1",
    image: "https://placehold.co/200",
    title: "Terra Kulture",
    location: "Victoria Island, Lagos",
    openingTime: "9 AM",
    closingTime: "10 PM",
    tags: [
      {
        name: "Restaurant",
        color:
          placeTags.find((tag) => tag.name === "Restaurant")?.color || "gray",
      },
      {
        name: "Restaurant",
        color:
          placeTags.find((tag) => tag.name === "Restaurant")?.color || "gray",
      },
      {
        name: "Restaurant",
        color:
          placeTags.find((tag) => tag.name === "Restaurant")?.color || "gray",
      },
    ],
  },
  {
    _id: "2",
    image: "https://placehold.co/200",
    title: "Quilox Night Club",
    location: "Victoria Island, Lagos",
    openingTime: "9 AM",
    closingTime: "10 PM",
    tags: [
      {
        name: "Club",
        color: placeTags.find((tag) => tag.name === "Club")?.color || "gray",
      },
    ],
  },
  {
    _id: "3",
    image: "https://placehold.co/200",
    title: "Nike Art Gallery",
    location: "Victoria Island, Lagos",
    openingTime: "9 AM",
    closingTime: "10 PM",
    tags: [
      {
        name: "Hotel",
        color: placeTags.find((tag) => tag.name === "Hotel")?.color || "gray",
      },
      {
        name: "Art Gallery",
        color:
          placeTags.find((tag) => tag.name === "Art Gallery")?.color || "gray",
      },
    ],
  },
  {
    _id: "4",
    image: "https://placehold.co/200",
    title: "Terra Kulture",
    location: "Victoria Island, Lagos",
    openingTime: "9 AM",
    closingTime: "10 PM",
    tags: [
      {
        name: "Restaurant",
        color:
          placeTags.find((tag) => tag.name === "Restaurant")?.color || "gray",
      },
    ],
  },
  {
    _id: "5",
    image: "https://placehold.co/200",
    title: "Terra Kulture",
    location: "Victoria Island, Lagos",
    openingTime: "9 AM",
    closingTime: "10 PM",
    tags: [
      {
        name: "Restaurant",
        color:
          placeTags.find((tag) => tag.name === "Restaurant")?.color || "gray",
      },
    ],
  },
] as {
  _id: string;
  image: string;
  title: string;
  location: string;
  openingTime: string;
  closingTime: string;
  tags: {
    name: string;
    color: ColorType;
  }[];
}[];
