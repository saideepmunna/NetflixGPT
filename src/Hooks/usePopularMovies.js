import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { MOVIE_FETCH_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularMovies = useSelector(store=>store.movies.popularMovies)
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?&page=1",
        MOVIE_FETCH_OPTIONS
      );
      const json = await data.json();
     
      // console.log(json.results); // API Data is fetched twice because of <App/> is wrapped by <React.Strictmode/> in index.js. React does tocompare both for data inconsistency.
      // It happens only in development environment and not in production. Strictmode can bee removed if you wanna log only once.
      dispatch(addPopularMovies(json.results));
    };
    useEffect(() => {
     !popularMovies && getPopularMovies();
    }, []);
}

export default usePopularMovies;