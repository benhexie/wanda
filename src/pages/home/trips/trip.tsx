import { useNavigate, useParams } from "react-router-dom";
import { trips } from "../../../utils/trips";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Trip = () => {
  const navigate = useNavigate();
  const { trip: id } = useParams();
  const trip = trips.find((trip) => trip._id === id);

  return (
    <div
      className="fixed z-20 top-0 bottom-0 right-0 left-0 bg-black bg-opacity-10 flex justify-end"
      onClick={() => navigate("/trips")}
    >
      <div
        className="relative flex flex-col w-full max-w-lg overflow-y-auto gap-8 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => navigate("/trips")}
          className="rounded-full flex justify-center items-center w-8 h-8 absolute top-8 left-8 bg-white z-10"
        >
          <MdOutlineKeyboardBackspace className="text-xl text-black" />
        </button>
        <img src={trip?.image} alt="" className="object-cover h-80 min-h-80" />
        <div className="flex flex-col gap-4 p-8 pt-0">
          <div className="flex gap-8 flex-col sm:flex-row">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">{trip?.title}</h2>
              <p className="text-lg text-gray-500">
                {trip?.from} - {trip?.to}
              </p>
              <p className="text-base text-gray-500">{trip?.description}</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Participants</h3>
              <div className="flex flex-row sm:flex-col gap-2 flex-wrap">
                {trip?.users.map((user, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <img
                      src={user.image}
                      alt={`Image of ${user.username}`}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold line-clamp-1">{user.username}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-8">Itinerary</h3>
          <table className="text-base">
            <thead className="font-semibold">
              <tr className="">
                <td>
                  <h3 className="mb-4">Date</h3>
                </td>
                <td>
                  <h3 className="mb-4">Time</h3>
                </td>
                <td>
                  <h3 className="mb-4">Location</h3>
                </td>
              </tr>
            </thead>
            <tbody className="">
              <tr className="font-semibold">
                <td>
                  <h3 className="mb-4">Day 1</h3>
                </td>
              </tr>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <tr key={item}>
                  <td className="">July 21,2024</td>
                  <td className="">1:00 PM</td>
                  <td className="">
                    <a href="#" className="underline">
                      Nike Art Gallery
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Trip;
