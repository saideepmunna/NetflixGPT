import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  // const MAX_LINES = 3;

  // Split the overview text into an array of words
  const words = overview.split(" ");
  // console.log(words);

  // Join the words up to the maximum number of lines and add ellipsis
  const limitedOverview = words.slice(0, 36).join(" ");
  // console.log(limitedOverview.join(" "))
  return (
    <div className="absolute z-10 text-white w-full aspect-video"
       style={{background: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0))"}}
    >
      <h1 className="pt-[138px] md:pt-60 px-4 md:px-12 w-1/2 font-bold text-xl md:text-4xl text-white mb-1 md:mb-0 ">{title}</h1>
      {words.length>50?
        <p className="px-12 text-base w-5/12 py-6 font-medium hidden md:block">
          {limitedOverview} ... <span className="font-light text-sm cursor-pointer">see more</span>
        </p>:<p className="px-12 text-base w-5/12 py-6 font-normal hidden md:block">
          {overview}
        </p>
      }
      <div className="flex ml-4 md:ml-12 ">
        <div className="mr-2 w-14 md:w-28 bg-white rounded-md">
          <div className="flex justify-center items-center py-[2px] md:px-18 md:py-2 cursor-pointer text-black">
            <div className="mr-2">
              <FontAwesomeIcon icon={faPlay} className="text-sm md:text-3xl" />
            </div>
            <div className="font-bold text-xs md:text-base">Play</div>
          </div>
        </div>
        <div className="w-20 md:w-40 bg-white bg-opacity-25 rounded-md md:flex items-center justify-center px-6 py-2 cursor-pointer hidden">
          <div className="mr-2">
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="text-2xl text-white"
            />
          </div>
          <div className="font-bold text-md text-white ">More Info</div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
