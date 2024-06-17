import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useState } from "react";

const NewTrip = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [participants, setParticipants] = useState([
    { image: "https://via.placeholder.com/50", username: "favesss (You)" },
  ]);

  return (
    <div
      className="fixed z-20 top-0 bottom-0 right-0 left-0 bg-black bg-opacity-10 flex justify-end"
      onClick={() => navigate("/trips")}
    >
      <div
        className="relative flex flex-col w-full max-w-xl overflow-y-auto gap-8 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => navigate("/trips")}
          className="rounded-full flex justify-center items-center w-8 h-8 absolute top-8 left-8 bg-white z-10"
        >
          <MdOutlineKeyboardBackspace className="text-xl text-black" />
        </button>
        <label className="h-80 min-h-80 bg-gray-300 relative flex justify-center items-center">
          <img src={image} alt="" className="object-cover h-full" />
          <p className="text-base text-gray-700 underline absolute pointer-events-none z-10">
            Choose trip image
          </p>
          <input type="file" name="image" hidden />
        </label>
        <div className="flex flex-col gap-4 p-8 pt-0">
          <div className="flex gap-8 flex-col sm:flex-row">
            <div className="flex flex-col gap-4">
              <input
                placeholder="Trip Name"
                className="text-2xl font-semibold outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="text-base text-gray-500">
                <input
                  type="date"
                  placeholder="Start Date"
                  className="w-fit outline-none"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />{" "}
                -{" "}
                <input
                  type="date"
                  placeholder="End Date"
                  className="w-fit outline-none"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Description"
                className="outline-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Participants</h3>
              <div className="flex flex-row sm:flex-col gap-2 flex-wrap">
                {participants.map((participant, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <img
                      src={participant.image}
                      alt={`Image of ${participant.username}`}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold line-clamp-1">
                        {participant.username}
                      </p>
                    </div>
                  </div>
                ))}
                <div
                  onClick={() => {}}
                  className="flex gap-4 items-center cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-300" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold whitespace-nowrap text-gray-500">
                      Add participant
                    </p>
                  </div>
                </div>
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
              {[1, 2, 3, 4].map((item) => (
                <tr key={item}>
                  <td className="text-gray-500 whitespace-nowrap">
                    {startDate || "Start Date"}
                  </td>
                  <td className="">
                    <input
                      type="time"
                      placeholder="Select Time"
                      className="w-full outline-none"
                    />
                  </td>
                  <td className="">
                    <a href="#" className="underline">
                      <input
                        type="text"
                        placeholder="Select Location"
                        className="w-full outline-none placeholder:underline"
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col gap-4 mt-8">
            <button
              onClick={() => {}}
              className="flex justify-center items-center h-12 w-full bg-secondary bg-opacity-20 font-semibold text-secondary rounded-md text-base"
            >
              Save Trip
            </button>
            <button
              onClick={() => {}}
              className="flex justify-center items-center h-12 w-full border border-secondary rounded-md text-secondary font-semibold text-base"
            >
              Create Crew
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTrip;
