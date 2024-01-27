import MovieCard from "./MovieCard";
import useDirectionIcon from "../Hooks/useDirectionIcon";
import DirectionIcon from "./DirectionIcon";

const MovieListSlider = ({ title, moviesList }) => {
  const { directionIcon, iconHandlerOver, iconHandlerOut } = useDirectionIcon();
  return (
    <div>
      <div
        className="pl-4 md:pl-12 mt-7 relative z-20"
        onMouseOver={iconHandlerOver}
        onMouseOut={iconHandlerOut}
      >
        <h1 className="text-white font-semibold text-sm md:text-lg">{title}</h1>
        <div className="flex overflow-x-auto no-scrollbar pt-3 cursor-pointer">
          <div className="flex gap-2">
            {moviesList.map((movie) => (
              <MovieCard key={movie?.id} imageId={movie?.poster_path} />
            ))}
          </div>
        </div>
        {directionIcon && <DirectionIcon />}
      </div>
    </div>
  );
};

export default MovieListSlider;
