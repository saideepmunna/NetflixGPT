import React from 'react'
import NowPlayingMovies from './NowPlayingMovies';
import { useSelector } from 'react-redux';
import TopRatedMovies from './TopRatedMovies';
import PopularMovies from './PopularMovies';
import UpcomingMovies from './UpcomingMovies';

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
     
      {nowPlaying&&<NowPlayingMovies nowPlayingMovies={nowPlaying}/>}
      {topRated&&<TopRatedMovies topRatedMovies={topRated}/>}
      {popularMovies&&<PopularMovies popularMovies={popularMovies}/>}
      {upComingMovies&&<UpcomingMovies upComingMovies={upComingMovies}/>}


    </div>
    
    </div>
  )
}

export default SecondaryContainer;