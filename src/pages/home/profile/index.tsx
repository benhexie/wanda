import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { placeTags } from "../../../utils/tags";
import { ColorType } from "../../../types";
import HomePlaceCard from "../../../components/HomePlaceCard";
import { WiMoonAltNew, WiMoonAltThirdQuarter } from "react-icons/wi";

const ProfileItem = ({
  title,
  image,
  description,
}: {
  title: string;
  image?: string;
  description: string;
  review?: boolean;
}) => {
  function formatTitle({ title: text }: { title: string }) {
    const specialCharacter = "\\*\\*";
    const regex = new RegExp(
      `${specialCharacter}(.*?)${specialCharacter}`,
      "g",
    );

    const formattedText = text.replace(
      regex,
      '<span class="font-semibold text-black">$1</span>',
    );

    return formattedText;
  }

  return (
    <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-xl">
      <div className="gap-4 flex items-center">
        {image && (
          <div className="rounded-full overflow-hidden">
            <img
              src={image}
              alt="Profile image"
              className="w-12 h-12 object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <p
            className="text-base line-clamp-2 text-gray-700"
            dangerouslySetInnerHTML={{ __html: formatTitle({ title }) }}
          />
        </div>
      </div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <WiMoonAltNew
            key={i}
            className="text-xl fill-secondary rounded-full"
          />
        ))}
      </div>
      <p className="text-base line-clamp-3 text-gray-700">{description}</p>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8 justify-center max-w-xl self-center mt-8">
        <div className="rounded-full overflow-hidden w-fit h-fit">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile image"
            className="object-cover w-28 h-28"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <p className="text-lg font-semibold">Favesss</p>
          <div className="px-4 py-2 rounded-full bg-gray-100 w-fit text-sm text-gray-700">
            <p>Lagos, Nigeria</p>
          </div>
          <p className="line-clamp-3 text-base">
            Explorer of new places, food lover, and culture enthusiast.
            Marketing Manager by profession, adventurer by decision.
          </p>
          <div className="flex gap-4">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTiktok />
            </a>
            <a href="#">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl font-semibold">Likes</p>
        <div className="w-full gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {places
            .filter((place) => place.tags.map((tab) => tab.name.toLowerCase()))
            .map((place) => (
              <HomePlaceCard key={place._id} {...place} />
            ))}
        </div>
      </div>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">Reviews</p>
          {reviews.map((review, index) => (
            <ProfileItem key={index} {...review} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">Activity Feed</p>
          {activityFeed.map((feed, index) => (
            <ProfileItem key={index} {...feed} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

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

const reviews = [
  {
    title: "You dropped a review for **Nike Art Gallery** in June, 2024",
    description:
      "Fire art vibes on point. Total must-see if you’re in Lagos. 💯",
  },
  {
    title: "You dropped a review for **Nike Art Gallery** in June, 2024",
    description:
      "Fire art vibes on point. Total must-see if you’re in Lagos. 💯",
  },
  {
    title: "You dropped a review for **Nike Art Gallery** in June, 2024",
    description:
      "Fire art vibes on point. Total must-see if you’re in Lagos. 💯",
  },
];

const activityFeed = [
  {
    title: "**tanny** added a new review for Hard Rock Cafe",
    description:
      "The food slaps, and the vibes are immaculate. Perfect for chilling with the squad. 🍔🎸",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "**tanny** added a new review for Hard Rock Cafe",
    description:
      "The food slaps, and the vibes are immaculate. Perfect for chilling with the squad. 🍔🎸",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "**tanny** added a new review for Hard Rock Cafe",
    description:
      "The food slaps, and the vibes are immaculate. Perfect for chilling with the squad. 🍔🎸",
    image: "https://via.placeholder.com/150",
  },
];
