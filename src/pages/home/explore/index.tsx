import { NavLink, useParams } from "react-router-dom";
import { placeTags } from "../../../utils/tags";
import { ColorType } from "../../../types";
import HomePlaceCard from "../../../components/HomePlaceCard";

const HomeFilterItem = ({ text, to = "#" }: { text: string; to?: string }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col gap-2 items-center border-b-2 text-base ${
          isActive ? "border-b-black" : "border-b-transparent"
        } transition-colors duration-300`
      }
    >
      <p className="whitespace-nowrap">{text}</p>
    </NavLink>
  );
};

const Explore = () => {
  const { tag: tagParam = "All" } = useParams();

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="flex gap-4 items-center justify-center flex-wrap sticky top-48 bg-white pb-4">
        {["All"].concat(placeTags.map((tag) => tag.name)).map((tag, index) => (
          <HomeFilterItem
            key={index}
            text={tag}
            to={`/explore/${encodeURIComponent(tag.toLowerCase())}`}
          />
        ))}
      </div>
      <div className="w-full gap-8 grid grid-cols-4">
        {places
          .filter((place) =>
            place.tags
              .map((tab) => tab.name.toLowerCase())
              .concat("all")
              .includes(tagParam.toLowerCase()),
          )
          .map((place) => (
            <HomePlaceCard key={place._id} {...place} />
          ))}
      </div>
    </div>
  );
};

export default Explore;

const places = [
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
