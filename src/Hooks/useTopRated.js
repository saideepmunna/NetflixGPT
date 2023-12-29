import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_FETCH_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRated = ()=>{
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store=>store.movies.topRatedMovies)
    const getTopratedMovies = async()=>{
          const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", MOVIE_FETCH_OPTIONS);
          const json = await data.json();
        //   console.log(json);
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(()=>{
       !topRatedMovies && getTopratedMovies();
    },[])
}

export default useTopRated;