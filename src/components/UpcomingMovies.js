import MovieCard from "./MovieCard";

const UpcomingMovies = ({upComingMovies}) => {
  return (
    <div>
        <div className="pl-12 mt-7 relative z-20">
        <h1 className="text-white font-semibold text-lg ">Upcoming Movies</h1>
        <div className="flex overflow-x-auto no-scrollbar pt-3">
          <div className="flex gap-2">
            {upComingMovies.map((movie) => (
              <MovieCard key={movie?.id} imageId={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingMovies;