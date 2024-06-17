import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const NewFriend = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <div
      className="fixed z-20 top-0 bottom-0 right-0 left-0 bg-black bg-opacity-10 flex justify-end"
      onClick={() => navigate(-1)}
    >
      <div
        className="relative flex flex-col w-full max-w-xl overflow-y-auto gap-8 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => navigate(-1)}
          className="rounded-full flex justify-center items-center w-8 h-8 absolute top-8 left-8 bg-white z-10"
        >
          <MdOutlineKeyboardBackspace className="text-xl text-black" />
        </button>
        <div className="flex flex-col gap-8 p-8 h-full">
          <h2 className="text-lg font-semibold mt-24">Add a friend</h2>
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
          <button
            onClick={() => {}}
            className="flex justify-center items-center h-12 w-full bg-secondary bg-opacity-20 font-semibold text-secondary rounded-md text-base mt-auto"
          >
            Save Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewFriend;
