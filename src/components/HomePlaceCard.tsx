import { Link } from "react-router-dom";
import { ColorType } from "../types";

const TagItem = ({ tag, color }: { tag: string; color: ColorType }) => {
  return (
    <div
      className={`${(() => {
        switch (color) {
          case "yellow":
            return "bg-yellow-100";
          case "blue":
            return "bg-blue-100";
          case "green":
            return "bg-green-100";
          case "pink":
            return "bg-pink-100";
          case "purple":
            return "bg-purple-100";
          case "orange":
            return "bg-orange-100";
          default:
            return "bg-gray-100";
        }
      })()} px-2 py-1 rounded-full`}
    >
      <p
        className={`${(() => {
          switch (color) {
            case "yellow":
              return "text-yellow-700";
            case "blue":
              return "text-blue-700";
            case "green":
              return "text-green-700";
            case "pink":
              return "text-pink-700";
            case "purple":
              return "text-purple-700";
            case "orange":
              return "text-orange-700";
            default:
              return "text-gray-700";
          }
        })()} text-xs`}
      >
        {tag}
      </p>
    </div>
  );
};

const HomePlaceCard = ({
  image,
  title,
  location: where,
  openingTime,
  closingTime,
  tags,
}: {
  image: string;
  title: string;
  location: string;
  openingTime: string;
  closingTime: string;
  tags: {
    name: string;
    color: ColorType;
  }[];
}) => {
  return (
    <Link to={""} className="flex flex-col gap-4">
      <div className="rounded-xl overflow-hidden w-full">
        <img
          src={image}
          alt={`Image of ${title}`}
          className="w-full h-56 object-cover"
        />
      </div>
      <p className="text-base font-semibold">{title}</p>
      <div className="flex justify-between text-gray-500 text-sm gap-4">
        <p>{where}</p>
        <p className="whitespace-nowrap">
          {openingTime} - {closingTime}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <TagItem key={index} tag={tag.name} color={tag.color} />
        ))}
      </div>
    </Link>
  );
};

export default HomePlaceCard;
