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
    <div className="absolute z-20 text-white bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="pt-52 px-12 w-1/2 font-bold text-4xl text-white">{title}</h1>
      {words.length>50?
        <p className="px-12 text-base w-5/12 py-6 font-medium ">
          {limitedOverview} ... <span className="font-light text-sm cursor-pointer">see more</span>
        </p>:<p className="px-12 text-base w-5/12 py-6 font-medium ">
          {overview}
        </p>
      }
      <div className="flex ml-12">
        <div className="mr-2 w-28 bg-white rounded-md">
          <div className="flex justify-center items-center px-18 py-2 cursor-pointer text-black">
            <div className="mr-2">
              <FontAwesomeIcon icon={faPlay} className="text-3xl" />
            </div>
            <div className="font-bold text-base">Play</div>
          </div>
        </div>
        <div className=" w-36 bg-zinc-600 opacity-90 rounded-md flex items-center justify-center px-4 cursor-pointer">
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
