import { useSelector } from "react-redux"
import MovieListSlider from "./MovieListSlider";

const GptMoviesContainer = () => {
    const {gptMovies, tmdbApiMovies} = useSelector(store=>store.gpt);
    
    if(!gptMovies) return null;
  return (
    <div>
        <div className="text-white -mt-80 bg-black">
            {gptMovies.map((movieName, index)=> <MovieListSlider key={movieName} title={"Movies like "+movieName} moviesList={tmdbApiMovies[index]}/>)}
        </div>
    </div>
  )
}

export default GptMoviesContainer;