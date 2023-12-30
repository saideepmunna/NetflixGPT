import MovieCard from "./MovieCard";
import useDirectionIcon from "./useDirectionIcon";
import DirectionIcon from "./DirectionIcon";

const NowPlayingMovies = ({ title, nowPlayingMovies }) => {
  // console.log(nowPlayingMovies);

  const { directionIcon, iconHandlerOver, iconHandlerOut } = useDirectionIcon();
  return (
    <div>
      <div
        className="pl-3 md:pl-12 mt-3 md:-mt-40 relative z-20"
        onMouseOver={iconHandlerOver}
        onMouseOut={iconHandlerOut}
      >
        <h1 className="text-white font-semibold text-sm md:text-lg">{title}</h1>
        <div className="flex overflow-x-auto no-scrollbar pt-3 cursor-pointer">
          <div className="flex gap-2">
            {nowPlayingMovies.map((movie) => (
              <MovieCard key={movie?.id} imageId={movie?.poster_path} />
            ))}
          </div>
        </div>

        {directionIcon && <DirectionIcon />}
      </div>
    </div>
  );
};

export default NowPlayingMovies;
