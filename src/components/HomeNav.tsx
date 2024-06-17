import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Search from "./Search";
import { IconType } from "react-icons";
import { GoBell } from "react-icons/go";
import { AiOutlineCompass } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";

const NavItem = ({
  to = "#",
  text = "",
  Icon,
  onClick,
}: {
  to?: string;
  text: string;
  Icon: IconType;
  onClick?: () => void;
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
      onClick={onClick}
    >
      <Icon className="text-xl" />
      <p className="text-base">{text}</p>
    </NavLink>
  );
};

const HomeNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full gap-4 flex flex-col sticky top-0 z-10 bg-white h-48 pt-8">
      <div className="flex flex-row flex-wrap w-full items-center gap-4">
        <div className="w-24 flex justify-start mt-4 sm:order-1">
          <Logo />
        </div>
        <div className="flex justify-center flex-[100%] sm:flex-1 order-3 sm:order-2">
          <Search />
        </div>
        <div className="w-24 flex justify-end items-center ml-auto order-2 sm:order-3 gap-4 mt-4 text-xl text-gray-500">
          <button className="">
            <GoBell className="" />
          </button>
          <button className="flex sm:hidden" onClick={() => setOpenMenu(true)}>
            <SlMenu />
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
      <div
        className={`fixed top-0 bottom-0 w-full z-20 bg-black bg-opacity-10 sm:hidden flex ${
          openMenu ? "right-[0%]" : "right-[100%]"
        } transition-all duration-300`}
        onClick={() => setOpenMenu(false)}
      >
        <div
          className={`flex flex-col bg-white h-full w-full max-w-xs p-4 ${
            openMenu ? "right-[0%]" : "right-[100%]"
          } transition-all duration-500`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mt-4 mb-8 flex justify-between">
            <Logo style="ml-4" />
            <button
              onClick={() => setOpenMenu(false)}
              className="text-gray-500 text-xl"
            >
              <RiCloseLargeFill />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <NavItem
              text="Explore"
              Icon={AiOutlineCompass}
              to="/explore"
              onClick={() => setOpenMenu(false)}
            />
            <NavItem
              text="Trips"
              Icon={GrLocation}
              to="/trips"
              onClick={() => setOpenMenu(false)}
            />
            <NavItem
              text="Crew"
              Icon={HiOutlineUserGroup}
              to="/crew"
              onClick={() => setOpenMenu(false)}
            />
            <NavItem
              text="Profile"
              Icon={IoPersonOutline}
              to="/profile"
              onClick={() => setOpenMenu(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
