import { useSelector } from "react-redux";
import useTrailerHook from "../Hooks/userTrailerHook";

const VideoBackground = ({ movieId }) => {
  useTrailerHook(movieId);
  const movieTrailer = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
      <div></div>;
      <iframe
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer?.key +
          "?si=nQNeTHiZC_WjBhKe&amp;controls=0&amp;start=3"
        }
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
