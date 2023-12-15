import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div>
      <h1 className="pt-24 px-12 font-bold text-4xl">{title}</h1>
      <p className="px-12 text-base w-5/12 py-6 font-semibold">{overview}</p>
      <div className="flex ml-12">
        <div className="mr-2 w-28 bg-slate-300 rounded-md">
          <div className="flex justify-center items-center px-12 py-2">
            <div className="mr-2">
              <FontAwesomeIcon icon={faPlay} className="text-3xl" />
            </div>
            <div className="font-bold text-base">Play</div>
          </div>
        </div>
        <div className=" w-36 bg-slate-300 rounded-md flex items-center justify-center px-4">
          <div className="mr-2">
            <FontAwesomeIcon icon={faCircleInfo} className="text-2xl"/>
          </div>
          <div className="font-bold text-md">More Info</div>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle;