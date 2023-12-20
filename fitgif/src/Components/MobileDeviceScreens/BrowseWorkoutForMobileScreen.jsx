import React, { useState } from "react";

const BrowseWorkoutForMobileScreen = () => {
    const [searchContent,setSearchContent]=useState('');
    const [loading,setLoading]=useState(true);

    const handleSearchButton = ()=>{
        console.log("searched key",searchContent)
        setLoading(false);
    }


  return (
    <div>
      <div className="h-8 w-screen justify-between px-4">
        <input
          type="search"
          className="w-auto px-1 border-2 mt-2 rounded-md bg-slate-50" value={searchContent} onChange={(e)=>setSearchContent(e.target.value) }
        ></input>
        <button className="w-auto border-2 ml-4 px-8 bg-green-400 " onClick={handleSearchButton}>
          Search
        </button>
      </div>
      {
        loading ? <h1>Loading</h1>:<div className="border-4 w-full h-screen">{searchContent}</div>
      }

     
      
    </div>
  );
};

export default BrowseWorkoutForMobileScreen;
