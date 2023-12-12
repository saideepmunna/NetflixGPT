import React, { useEffect } from "react";

import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
 
const Browse = () => {
  useNowPlayingMovies(); //Custom Hook that fetches data from API and dispatches an action to moviesSlice.
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
