import { Link, Outlet } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { PiPaperPlaneTilt } from "react-icons/pi";

const ChatBlock = ({
  _id,
  image,
  title,
  lastMessage,
  username,
  date,
  border = true,
}: {
  _id: string;
  image: string;
  title: string;
  username?: string;
  lastMessage?: string;
  date: Date;
  border?: boolean;
}) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const isPM = hours >= 12;
  const time = `${hours % 13}:${minutes} ${isPM ? "PM" : "AM"}`;

  return (
    <Link
      to={`chat/${_id}`}
      className={`flex items-center gap-4 ${
        border ? "border-b" : ""
      } border-gray-200 py-4`}
    >
      <img
        src={image}
        alt={`Image of ${title}`}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex gap-4 items-end">
        <div className="flex flex-col gap-2 flex-1">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm line-clamp-1">
            {username}: {lastMessage}
          </p>
        </div>
        <div className="">
          <p className="text-sm">{time}</p>
        </div>
      </div>
    </Link>
  );
};

const Crew = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="flex flex-col gap-8 flex-1">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-black">Crew</h2>
          <Link
            to={"new"}
            className="flex justify-center items-center gap-2 bg-secondary bg-opacity-10 text-secondary py-2 px-4 rounded-md"
          >
            <FiPlus className="text-sm" />
            <p className="font-medium text-sm">New Friend</p>
          </Link>
        </div>
        <div className="flex gap-8 flex-1">
          <div className="w-full max-w-sm flex flex-col gap-8">
            <div className="flex items-center px-4 rounded-full border border-gray-200 bg-gray-100 gap-4">
              <IoSearchOutline className="text-gray-500 text-xl" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Username"
                className="w-full py-2 bg-transparent outline-none"
              />
            </div>
            <div className="flex-1 relative">
              <div className="flex flex-col absolute top-0 left-0 right-0 bottom-0 overflow-y-auto">
                {chats.map((chat, index) => (
                  <ChatBlock
                    key={chat._id}
                    {...chat}
                    border={index !== chats.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Chat image"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex flex-col gap-1 flex-1">
                <h2 className="text-lg font-semibold">The One Lagos Weekend</h2>
                <p className="text-sm">
                  fubara, tanny, vivian, ise_keenam, You
                </p>
              </div>
              <Link
                to={"/trips/1"}
                className="text-base font-semibold text-secondary underline"
              >
                Open Trip
              </Link>
            </div>
            <div className="flex-1 bg-secondary overflow-y-auto bg-opacity-20 rounded-md relative">
              <div className="flex flex-col gap-4 py-4 px-8 absolute top-0 left-0 right-0">
                <Outlet />
              </div>
            </div>
            <div className="">
              <div className="flex items-center px-4 rounded-full border border-gray-200 bg-gray-100 gap-4">
                <input
                  type="text"
                  placeholder="Send a message to The One Lagos Weekend"
                  className="w-full py-2 bg-transparent outline-none"
                />
                <button className="pl-4 py-2">
                  <PiPaperPlaneTilt className="text-gray-500 text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crew;

const chats = [
  {
    _id: "1",
    title: "The One Lagos Weekend",
    image: "https://via.placeholder.com/50",
    username: "fubara",
    lastMessage: "really can’t wait for this weekend man!",
    date: new Date(),
  },
  {
    _id: "2",
    title: "The One Lagos Weekend",
    image: "https://via.placeholder.com/50",
    username: "fubara",
    lastMessage: "really can’t wait for this weekend man!",
    date: new Date(),
  },
  {
    _id: "3",
    title: "The One Lagos Weekend",
    image: "https://via.placeholder.com/50",
    username: "fubara",
    lastMessage: "really can’t wait for this weekend man!",
    date: new Date(),
  },
  {
    _id: "4",
    title: "The One Lagos Weekend",
    image: "https://via.placeholder.com/50",
    username: "fubara",
    lastMessage: "really can’t wait for this weekend man!",
    date: new Date(),
  },
  {
    _id: "5",
    title: "The One Lagos Weekend",
    image: "https://via.placeholder.com/50",
    username: "fubara",
    lastMessage: "really can’t wait for this weekend man!",
    date: new Date(),
  },
  {
    _id: "6",
    title: "The One Lagos Weekend",
    image: "https://via.placeholder.com/50",
    username: "fubara",
    lastMessage: "really can’t wait for this weekend man!",
    date: new Date(),
  },
];
