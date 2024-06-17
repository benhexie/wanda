const MessageBlock = ({
  sent = true,
  image,
  username,
  message,
  date,
}: {
  sent?: boolean;
  image?: string;
  username?: string;
  message: string;
  date: Date;
}) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const isPM = hours >= 12;
  const time = `${hours % 13}:${minutes} ${isPM ? "PM" : "AM"}`;

  return (
    <div className={`flex w-full ${sent ? "justify-end" : "justify-start"}`}>
      <div className="max-w-xl w-fit flex gap-4">
        {username && (
          <img
            src={image}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div className="flex flex-col gap-1">
          {username && <p className="text-sm">{username}</p>}
          <div
            className={`px-4 py-3 text-base rounded-lg ${
              sent ? "bg-secondary" : "bg-gray-50"
            }`}
          >
            <p className="text-base text-black">{message}</p>
          </div>
          <p className={`text-sm ${sent ? "self-end" : "self-start"}`}>
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

const Chat = () => {
  return (
    <>
      {messages.map((message) => (
        <MessageBlock key={message._id} {...message} />
      ))}
    </>
  );
};

export default Chat;

const messages = [
  {
    _id: "1",
    message: "I can bring mine. Also, should we split into groups for rides?",
    date: new Date(),
    sent: true,
  },
  {
    _id: "2",
    username: "fubara",
    message: "Good idea. I can drive three people. Anyone else with a car?",
    date: new Date(),
    image: "https://via.placeholder.com/50",
    sent: false,
  },
  {
    _id: "3",
    username: "tanny",
    message: "I'll take my car too. So we're covered.",
    date: new Date(),
    image: "https://via.placeholder.com/50",
    sent: false,
  },
  {
    _id: "4",
    username: "vivian",
    message:
      "Great! I’m bringing snacks and drinks for the ride. This is going to be epic!",
    date: new Date(),
    image: "https://via.placeholder.com/50",
    sent: false,
  },
  {
    _id: "5",
    message: "really can’t wait for this weekend, man!",
    date: new Date(),
    sent: true,
  },
];
