import React from 'react'
import NowPlayingMovies from './NowPlayingMovies';
import { useSelector } from 'react-redux';
import MovieListSlider from './MovieListSlider';

const SecondaryContainer = () => {

  const movies = useSelector(store=>store?.movies)
  const nowPlaying = movies?.nowPlayingMovies
  const topRated = movies?.topRatedMovies;
  const popularMovies = movies?.popularMovies;
  const upComingMovies = movies?.upcomingMovies;
  return (
    <div>
      {/**
       * Now Playing
         -Movie cards*n
       * Popular
         -Movie cards*n
       * Trending
         -Movie cards*n
       * Horror & Thrillers
         -Movie cards*n
       */}
    <div>
     
      {nowPlaying&&<NowPlayingMovies title={"Now Playing"} nowPlayingMovies={nowPlaying}/>}
      {topRated&&<MovieListSlider title={"Top Rated Movies"} moviesList={topRated}/>}
      {popularMovies&&<MovieListSlider title={"Popular Movies"} moviesList={popularMovies}/>}
      {upComingMovies&&<MovieListSlider title={"Upcoming movies"} moviesList={upComingMovies}/>}


    </div>
    
    </div>
  )
}

export default SecondaryContainer;