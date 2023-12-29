import { useDispatch, useSelector } from "react-redux";
import { MOVIE_FETCH_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";



const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)
    const getMovieList = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?&page=1",
        MOVIE_FETCH_OPTIONS
      );
      const json = await data.json();
     
      // console.log(json.results); // API Data is fetched twice because of <App/> is wrapped by <React.Strictmode/> in index.js. React does tocompare both for data inconsistency.
      // It happens only in development environment and not in production. Strictmode can bee removed if you wanna log only once.
      dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(() => {
      !nowPlayingMovies && getMovieList(); //MEMOIZATION 
    }, []);
};

export default useNowPlayingMovies;