import { useEffect, useRef, useState } from "react";
import { GoSearch } from "react-icons/go";
import { placeTags } from "../utils/tags";
import { NavLink, useLocation } from "react-router-dom";

const SearchItem = ({
  icon,
  text,
  openMenu,
  setOpenMenu,
}: {
  icon: string;
  text: string;
  openMenu: boolean;
  setOpenMenu: (arg: boolean) => void;
}) => {
  return (
    <NavLink
      to={`/explore/${encodeURIComponent(text.toLowerCase())}`}
      className={`flex gap-4 items-center px-2 py-4 bg-white ${
        openMenu ? "pointer-events-auto" : "pointer-events-none"
      }`}
      onClick={() => {
        setOpenMenu(false);
      }}
    >
      <p>{icon}</p>
      <p>{text}</p>
    </NavLink>
  );
};

const Search = () => {
  const searchRef = useRef(null) as any;
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname, search } = useLocation();

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname, search]);

  return (
    <div className="relative w-full max-w-xl flex flex-col p-4 pb-0 rounded-t-2xl bg-white">
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 -z-10 bg-black ${
          openMenu
            ? "bg-opacity-10 pointer-events-auto"
            : "bg-opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpenMenu(false)}
      />
      <form
        onClick={() => {
          if (searchRef.current) searchRef.current.focus();
        }}
        className="w-full flex bg-gray-100 py-4 px-6 rounded-full items-center gap-4 cursor-pointer"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <GoSearch className="text-xl text-gray-500 pointer-events-none" />
        <input
          ref={searchRef}
          className="flex-1 outline-none bg-transparent cursor-pointer focus:cursor-text"
          onFocus={() => setOpenMenu(true)}
        />
      </form>
      <div
        className={`absolute z-10 bg-white top-[100%] left-0 rounded-b-2xl w-full max-w-xl p-4 flex flex-col transition-opacity duration-300 ${
          openMenu
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {placeTags.map((tag, index) => (
          <SearchItem
            key={index}
            icon={tag.icon}
            text={tag.name}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
