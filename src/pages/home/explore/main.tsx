import { useParams } from "react-router-dom";
import HomePlaceCard from "../../../components/HomePlaceCard";
import { places } from "../../../utils/places";

const ExploreMain = () => {
  const { tag: tagParam = "All" } = useParams();

  return (
    <div className="w-full gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {places
        .filter((place) =>
          place.tags
            .map((tab) => tab.name.toLowerCase())
            .concat("all")
            .includes(tagParam.toLowerCase()),
        )
        .map((place) => (
          <HomePlaceCard key={place._id} {...place} />
        ))}
    </div>
  );
};

export default ExploreMain;