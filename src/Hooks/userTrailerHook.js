import { useDispatch, useSelector } from "react-redux";
import { MOVIE_FETCH_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";


const useTrailerHook = (movieId)=>{
    // const [trailerId, setTrailerId] = useState(null)
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      MOVIE_FETCH_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);

    const filteredTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer =  filteredTrailer.length ? filteredTrailer[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
    // return trailer;
    console.log(trailer)
    // setTrailerId(trailer.key) 
    // one method of passing trailer.key into jsx by useState
    // But its better to use redux store to dispatch an action and get the data from the store and use in JSX.
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
}

export default useTrailerHook;