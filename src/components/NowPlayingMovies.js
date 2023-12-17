import MovieCard from "./MovieCard";

const NowPlayingMovies = ({ nowPlayingMovies }) => {
  // console.log(nowPlayingMovies);
  return (
    <div>
      <div className="pl-12 -mt-40 relative z-20">
      <h1 className="text-white font-semibold text-lg ">Now Playing</h1>
      <div className="flex overflow-x-auto no-scrollbar pt-3">
        <div className="flex gap-2">
          {nowPlayingMovies.map((movie) => (
            <MovieCard key={movie?.id} imageId={movie?.poster_path} />
          ))}
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default NowPlayingMovies;
