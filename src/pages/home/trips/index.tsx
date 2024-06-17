import { Link, Outlet } from "react-router-dom";
import TripCard from "../../../components/TripCard";
import { FiPlus } from "react-icons/fi";
import { trips } from "../../../utils/trips";

const Trips = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-black">Upcoming Trips</h2>
          <Link
            to={"new"}
            className="flex justify-center items-center gap-2 bg-secondary bg-opacity-10 text-secondary py-2 px-4 rounded-md"
          >
            <FiPlus className="text-sm" />
            <p className="font-medium text-sm">New Trip</p>
          </Link>
        </div>
        <div className="w-full gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {trips.map((trip) => (
            <TripCard key={trip._id} {...trip} />
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Trips;
