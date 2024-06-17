import { useNavigate, useParams } from "react-router-dom";
import { places } from "../../../utils/places";
import { GoHeart, GoPlus } from "react-icons/go";
import { PiExport } from "react-icons/pi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { TagItem } from "../../../components/HomePlaceCard";
import { WiMoonAltNew, WiMoonAltThirdQuarter } from "react-icons/wi";
import { ReviewAndFeed } from "../../../components/ReviewAndFeed";

const ExplorePlace = () => {
  const { place: id } = useParams();
  const place = places.find((p) => p._id === id);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <button onClick={() => navigate(-1)}>
        <MdOutlineKeyboardBackspace className="text-3xl text-black" />
      </button>
      <div className="flex items-center">
        <div className="flex-1 flex flex-wrap gap-2 items-center">
          <h1 className="text-xl font-semibold">{place?.title}</h1>
          {place?.tags.map((tag, index) => (
            <TagItem key={index} tag={tag.name} color={tag.color} />
          ))}
        </div>
        <div className="flex gap-4 items-center ml-auto">
          <button className="w-8 h-8 rounded-full bg-gray-100 flex justify-center items-center">
            <GoHeart className="text-gray-700 text-lg" />
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex justify-center items-center">
            <GoPlus className="text-gray-700 text-lg" />
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex justify-center items-center">
            <PiExport className="text-gray-700 text-lg" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm text-gray-500">
        <div className="flex gap-1">
          <p>Location:</p>
          <p>Lekki, Lagos</p>
        </div>
        <div className="flex gap-1">
          <p>Open hours:</p>
          <div className="">
            <p>Monday - Saturday: 10AM - 6PM</p>
            <p>Sunday: 1PM - 6PM</p>
          </div>
        </div>
      </div>
      <div className="flex gap-8 flex-col sm:flex-row">
        <div className="flex-[0.5]">
          <img
            src={place?.image}
            alt={`Image of ${place?.title}`}
            className="rounded-lg w-full h-80 object-cover"
          />
        </div>
        <div className="flex-[0.5] grid grid-cols-2 lg:grid-cols-3 gap-8">
          <img
            src={place?.image}
            alt={`Image of ${place?.title}`}
            className="rounded-lg w-full h-36 object-cover"
          />
          <img
            src={place?.image}
            alt={`Image of ${place?.title}`}
            className="rounded-lg w-full h-36 object-cover"
          />
          <img
            src={place?.image}
            alt={`Image of ${place?.title}`}
            className="rounded-lg w-full h-36 object-cover"
          />
          <img
            src={place?.image}
            alt={`Image of ${place?.title}`}
            className="rounded-lg w-full h-36 object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col mt-24 gap-8 md:flex-row">
        <div className="flex flex-col gap-4 flex-[0.5]">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="text-base text-gray-500">
            Nike Art Gallery is one of the largest art galleries in Nigeria,
            showcasing a wide range of contemporary African art. Located in the
            heart of Lekki, Lagos, it offers visitors an immersive experience
            into the rich cultural heritage and artistic expressions of the
            region. The gallery features works from renowned and emerging
            artists, making it a must-visit for art enthusiasts and tourists
            alike.
          </p>
          <p className="text-base">
            Entry is <span className="text-base font-semibold">FREE!</span>
          </p>
        </div>
        <div className="flex flex-col gap-4 flex-[0.5]">
          <h2 className="text-2xl font-semibold">Review</h2>
          <div className="flex gap-2 items-end">
            <p className="text-2xl font-bold -mb-1">4.5</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <WiMoonAltNew
                  key={i}
                  className="text-xl fill-secondary rounded-full"
                />
              ))}
            </div>
            <p className="">2,759 reviews</p>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            {activityFeed.map((feed, index) => (
              <ReviewAndFeed key={index} {...feed} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePlace;

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

