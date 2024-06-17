import { Link } from "react-router-dom";

const TripCard = ({
  _id,
  image,
  title,
  from,
  to,
  users,
}: {
  _id: string;
  image: string;
  title: string;
  from: string;
  to: string;
  users: {
    image?: string;
    username: string;
  }[];
}) => {
  return (
    <Link to={_id} className="flex flex-col gap-4">
      <div className="rounded-xl overflow-hidden w-full">
        <img
          src={image}
          alt={`Image of ${title}`}
          className="w-full h-56 object-cover"
        />
      </div>
      <p className="text-base font-semibold">{title}</p>
      <div className="text-gray-500 text-sm">
        <p className="line-clamp-2">
          {from} - {to}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          {users.map((user, index) => (
            <img
              key={index}
              src={user.image}
              alt={`Image of ${user.username}`}
              className="w-6 h-6 object-cover rounded-full -ml-3 border-2 border-white"
            />
          ))}
        </div>
        <p className="text-sm text-gray-500">
          You and {users.length - 1} others
        </p>
      </div>
    </Link>
  );
};

export default TripCard;
