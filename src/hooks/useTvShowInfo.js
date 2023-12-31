import { useEffect, useState } from 'react'
import { API_OPTIONS, Get_Tv_Show_Credits_Url, Get_Tv_Show_Info_Url1, Get_Tv_Show_Info_Url2 } from '../utils/constants'

const useTvShowInfo = (showId) => {

    const [tvShow,setTvShow]=useState();
    const [casts,setCasts]=useState();

    const getCasts=async()=>{
        const data=await fetch(Get_Tv_Show_Info_Url1+showId+Get_Tv_Show_Credits_Url,API_OPTIONS)
        const json=await data.json();
        setCasts(json.cast);
    }
  
  const getTvShowDetails=async()=>{
    const data=await fetch(Get_Tv_Show_Info_Url1+showId+Get_Tv_Show_Info_Url2,API_OPTIONS);
    const json=await data.json();
    setTvShow(json);

  }
  
  useEffect(()=>{
    getTvShowDetails();
    getCasts();
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])

  return {
    tvShow:tvShow,
    casts:casts
  }
}

export default useTvShowInfo
