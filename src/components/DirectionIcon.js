import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DirectionIcon = () => {
  return (
    <div>
      <div className="absolute z-20 right-0 bg-black bg-opacity-50 top-[85px] md:top-[117px] text-2xl md:text-5xl">
        <FontAwesomeIcon icon={faAngleRight} className="text-white" />
      </div>
      <div className="absolute z-20 left-2 bg-black bg-opacity-40 top-[85px] md:top-[117px] text-2xl md:text-5xl">
        <FontAwesomeIcon icon={faAngleLeft} className="text-white" />
      </div>
    </div>
  );
};

export default DirectionIcon;
