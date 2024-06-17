import { NavLink, Outlet } from "react-router-dom";
import { placeTags } from "../../../utils/tags";

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
      <Outlet />
    </div>
  );
};

export default Explore;
