import { WiMoonAltNew, WiMoonAltThirdQuarter } from "react-icons/wi";

export const ReviewAndFeed = ({
  title,
  image,
  description,
}: {
  title: string;
  image?: string;
  description: string;
  review?: boolean;
}) => {
  function formatTitle({ title: text }: { title: string }) {
    const specialCharacter = "\\*\\*";
    const regex = new RegExp(
      `${specialCharacter}(.*?)${specialCharacter}`,
      "g",
    );

    const formattedText = text.replace(
      regex,
      '<span class="font-semibold text-black">$1</span>',
    );

    return formattedText;
  }

  return (
    <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-xl">
      <div className="gap-4 flex items-center">
        {image && (
          <div className="rounded-full overflow-hidden">
            <img
              src={image}
              alt="Profile image"
              className="w-12 h-12 object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <p
            className="text-base line-clamp-2 text-gray-700"
            dangerouslySetInnerHTML={{ __html: formatTitle({ title }) }}
          />
        </div>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <WiMoonAltNew
            key={i}
            className="text-xl fill-secondary rounded-full"
          />
        ))}
      </div>
      <p className="text-base line-clamp-3 text-gray-700">{description}</p>
    </div>
  );
};
