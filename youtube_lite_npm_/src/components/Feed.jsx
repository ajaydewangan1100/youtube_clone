import React, { useContext, useEffect } from 'react';

import { Context } from '../context/contextApi';
import LeftNav from "./LeftNav"
// Video card component 
import VideoCard from "./VideoCard";

const Feed = () => {

  const { loading, searchResults } = useContext(Context)

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h")
  }, [])

  return (
    <div className='flex flex-row h-[calc(100%-56px)] '>
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading && 
          searchResults && 
          searchResults.map((item) => {
            // if any item isnot video type not return component
            if(item?.type !== "video") return false;
            return (
              <VideoCard 
                key={item?.video?.videoID} 
                video={item?.video} />
              )
          })}
        </div>
      </div>
    </div>
  )
}

export default Feed