import React, { useState } from "react";

const BrowseWorkout = () => {
    const [searchContent,setSearchContent]=useState('');
    const [loading,setLoading]=useState(true);

    const handleSearchButton = ()=>{
        console.log("searched key",searchContent)
        setLoading(false);
    }


  return (
    <div className=" h-screen ">
      <div className="h-8 w-screen mx-4 sm:flex sm:justify-center md:justify-center md:flex lg:h-14 lg:w-full ">
        <input
          type="search"
          className="hover:border hover:border-1 hover:border-black w-48  border-2 mt-2 rounded-md bg-slate-50 sm:w-64 sm:my-1 sm:p-2 lg:w-96 lg:my-2 lg:p-2" value={searchContent} onChange={(e)=>setSearchContent(e.target.value) }
        ></input>
        <button className="w-16 border-2 ml-2 sm:my-1 md:text-white md:w-36 bg-green-400 lg:w-48 lg:my-2 " onClick={handleSearchButton}>
          Search
        </button>
      </div>
      {
        loading ? <h1>Loading</h1>:<div className="border-4 w-full h-screen">{searchContent}</div>
      }

     
      
    </div>
  );
};

export default BrowseWorkout;