import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRated from "../Hooks/useTopRated";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import Footer from "./Footer";

const Browse = () => {
  useNowPlayingMovies(); //Custom Hook that fetches data from API and dispatches an action to moviesSlice.
  useTopRated();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div className="bg-black">
      <Header />
      <MainContainer />
      <SecondaryContainer/>
      <Footer/>
    </div>
  );
};

export default Browse;
