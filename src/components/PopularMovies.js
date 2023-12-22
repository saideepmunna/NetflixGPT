import MovieCard from "./MovieCard";
import useDirectionIcon from "./useDirectionIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const PopularMovies = ({ popularMovies }) => {
  const { directionIcon, iconHandlerOver, iconHandlerOut } = useDirectionIcon();
  return (
    <div>
      <div
        className="pl-12 mt-7 z-20 relative"
        onMouseOver={iconHandlerOver}
        onMouseOut={iconHandlerOut}
      >
        <h1 className="text-white font-semibold text-lg">Popular Movies</h1>
        <div className="flex overflow-x-auto no-scrollbar pt-3 cursor-pointer">
          <div className="flex flex-row-reverse gap-2">
            {popularMovies.map((movie) => (
              <MovieCard key={movie?.id} imageId={movie?.poster_path} />
            ))}
          </div>
        </div>

        {directionIcon && (
          <div>
            <div className="absolute z-20 right-0 bg-black bg-opacity-50 top-[117px] text-5xl">
              <FontAwesomeIcon icon={faAngleRight} className="text-white" />
            </div>
            <div className="absolute z-20 left-2 bg-black bg-opacity-40 top-[117px] text-5xl">
              <FontAwesomeIcon icon={faAngleLeft} className="text-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularMovies;
