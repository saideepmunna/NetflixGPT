import MovieCard from "./MovieCard";

const TopRatedMovies = ({ topRatedMovies }) => {
  return (
    <div>
      <div className="pl-12 mt-7 relative z-20">
        <h1 className="text-white font-semibold text-lg ">Top Rated Movies</h1>
        <div className="flex overflow-x-auto no-scrollbar pt-3">
          <div className="flex gap-2">
            {topRatedMovies.map((movie) => (
              <MovieCard key={movie?.id} imageId={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovies;