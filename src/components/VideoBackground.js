import { useSelector } from "react-redux";
import useTrailerHook from "../Hooks/userTrailerHook";

const VideoBackground = ({ movieId }) => {
  useTrailerHook(movieId);
  const movieTrailer = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="overflow-hidden">
      <iframe
        className="w-full aspect-video absolute"
        style={{ transform: "scale(1.35)" }}
        src={"https://www.youtube-nocookie.com/embed/"+movieTrailer?.key+"?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&vq=4k2160"}
        title="YouTube video player"
        
        allow=" autoplay;"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
