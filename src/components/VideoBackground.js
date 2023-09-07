import React from 'react'
import useTrailer from '../hooks/useTrailer'
import { useSelector } from 'react-redux';
import Loader from './Loader';


const VideoBackground = ({movieId,backgroundImage}) => {
    useTrailer(movieId);
    const trailer=useSelector((store)=>store.movies?.trailer);
    
  return (
    <>
    {trailer ? (<div className='w-full -z-10 pt-20 md:pt-0'>

    <iframe src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1&controls=0&modestbranding=1&vq=hd1080"} 
      title="YouTube video player" 
      frameBorder="0" 
      className='w-full aspect-video'></iframe>
    </div>):(
      <Loader/>
    )}
    </>
  )
}

export default VideoBackground
