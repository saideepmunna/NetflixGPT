import { useSelector } from "react-redux";
import useTrailerHook from "../Hooks/userTrailerHook";

const VideoBackground = ({ movieId }) => {
  useTrailerHook(movieId);
  const movieTrailer = useSelector((store) => store.movies?.trailerVideo);

  console.log(movieTrailer?.key)
  return (
    <div>
      <div className="overflow-hidden">
      <iframe
        className="w-full aspect-video scale-[1.32]"
        // style={{ transform: "scale(1.35)" }}
        src={"https://www.youtube-nocookie.com/embed/"+movieTrailer?.key+"?start=5&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist="+movieTrailer?.key}
        title="YouTube video player"
        allow=" autoplay;"
      ></iframe>
      </div>
      
    </div>
  );
};

export default VideoBackground;
