import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import HomePlaceCard from "../../../components/HomePlaceCard";
import { places } from "../../../utils/places";
import { ReviewAndFeed } from "../../../components/ReviewAndFeed";

const ProfileMain = () => {
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
              <HomePlaceCard
                key={place._id}
                {...place}
                _id={`/explore/all/${place._id}`}
              />
            ))}
        </div>
      </div>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">Reviews</p>
          {reviews.map((review, index) => (
            <ReviewAndFeed key={index} {...review} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">Activity Feed</p>
          {activityFeed.map((feed, index) => (
            <ReviewAndFeed key={index} {...feed} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;

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
