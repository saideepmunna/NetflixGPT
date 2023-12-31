import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movies = useSelector((store)=>store.movies?.upcomingMovies);
  
  // console.log(movies)
  if(!movies) return; //EARLY RETURN

  const mainMovie = movies[12];

  // console.log(mainMovie)
  

 
 const {id, title, overview} = mainMovie;

  return (
    <div>
        <VideoTitle title={title} overview={overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;