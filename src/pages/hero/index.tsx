import React from "react";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-8 h-screen">
      <div className="flex-1 lg:flex-[0.5] flex justify-center overflow-y-auto p-4 lg:pr-0">
        <div className="flex-1 max-w-2xl pt-8 flex flex-col">
          <Logo />
          <div className="w-fit mt-16">
            <div className="flex flex-col gap-8">
              <div className="flex-1">
                <p className="text-3xl font-semibold">
                  FIND YOUR NEXT DESTINATION
                </p>
              </div>
              <div className="flex gap-8 items-center">
                <div className="border-b border-gray-200 flex-1" />
                <p className="text-3xl font-semibold">WITH WANDA</p>
              </div>
            </div>
          </div>
          <div className="flex mt-8">
            <p className="text-base">
              Discover, plan, and share your next adventure with Wanda. Whether
              you're looking for the hottest new restaurant, a hidden beach, or
              an epic event, Wanda is your guide to the best experiences. Your
              journey starts here!
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-2 sm:gap-8 mt-8">
            <img
              src={require("../../assets/images/party.webp")}
              alt="Image of party"
              className="col-span-2 row-span-2 rounded-lg"
            />
            <img
              src={require("../../assets/images/bar.webp")}
              alt="Image of bar"
              className="col-span-1 row-span-1 rounded-lg"
            />
            <img
              src={require("../../assets/images/beach.webp")}
              alt="Image of beach"
              className="col-span-1 row-span-1 rounded-lg"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full mt-8">
            <button
              onClick={() => {
                navigate("/auth/register");
              }}
              className="p-2 flex-1 rounded-md bg-secondary bg-opacity-20 text-secondary font-semibold text-base"
            >
              Create an account
            </button>
            <button
              onClick={() => {
                navigate("/explore/all");
              }}
              className="p-2 flex-1 rounded-md font-semibold border-2 border-secondary text-secondary text-base"
            >
              Get back to exploring
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:flex-[0.5] p-4 pl-0">
        <img
          src={require("../../assets/images/arcade.webp")}
          alt="Image of arcade"
          className="rounded-r-lg w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
