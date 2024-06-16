import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Search from "./Search";
import { IconType } from "react-icons";
import { GoBell } from "react-icons/go";
import { AiOutlineCompass } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";

const NavItem = ({
  to = "#",
  text = "",
  Icon,
  isActive = false,
}: {
  to?: string;
  text: string;
  Icon: IconType;
  isActive?: boolean;
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex gap-2 items-center px-4 py-2 rounded-full ${
          isActive
            ? "bg-green-50 text-green-500"
            : "bg-transparent text-gray-500"
        } hover:text-green-500 transition-colors duration-300`
      }
      to={to}
    >
      <Icon className="text-xl" />
      <p className="text-base">{text}</p>
    </NavLink>
  );
};

const HomeNav = () => {
  return (
    <div className="w-full gap-4 flex flex-col sticky top-0 z-10 bg-white h-48 pt-8">
      <div className="flex flex-row flex-wrap w-full items-center gap-4">
        <div className="w-24 flex justify-start mt-4 sm:order-1">
          <Logo />
        </div>
        <div className="flex justify-center flex-[100%] sm:flex-1 order-3 sm:order-2">
          <Search />
        </div>
        <div className="w-24 flex justify-end ml-auto order-2 sm:order-3">
          <button className="mt-4">
            <GoBell className="text-xl text-gray-500" />
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-lg justify-between gap-4 hidden sm:flex">
          <NavItem text="Explore" Icon={AiOutlineCompass} to="/explore" />
          <NavItem text="Trips" Icon={GrLocation} to="/trips" />
          <NavItem text="Crew" Icon={HiOutlineUserGroup} to="/crew" />
          <NavItem text="Profile" Icon={IoPersonOutline} to="/profile" />
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
