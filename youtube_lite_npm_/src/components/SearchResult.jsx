import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { fetchDataFromApi } from '../utils/api';
import { Context } from '../context/contextApi';
import LeftNav from "./LeftNav";
import SearchResultsVideoCard from './SearchResultVideoCard';


const SearchResult = () => {
  const [result, setResult] = useState();
    const { searchquery } = useParams();
    console.log(useParams())
    const { setLoading } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
        fetchSearchResults();
    }, [searchquery]);

    const fetchSearchResults = () => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${searchquery}`).then((res) => {
            console.log(res);
            setResult(res?.contents);
            setLoading(false);
        });
    };

  return (
    <div className='flex flex-row h-[calc(100%-56px)] '>
      <LeftNav />
      <div className="grow h-full w-[calc(100%-240px)] overflow-y-auto bg-black ">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item) => {
            if (item?.type !== "video") return false;
            let video = item?.video;
            return (
              <SearchResultsVideoCard 
              key={video?.videoId}
              video={video} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchResult;