import React from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const VideoContainer = () => {

    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;
    const {original_title,id,overview,backdrop_path}=movies[0];

    return( 
    <div className="bg-stone-900">
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id} backgroundImage={backdrop_path}/>
    </div>
)};

export default VideoContainer;
