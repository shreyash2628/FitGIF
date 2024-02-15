import React, { useState } from "react";
import { BodyPartName } from '../Utils/ExerciseScrollbarData';

import { ExerciseDbOptions } from "../Utils/Api";

const BrowseWorkout = () => {
  const [searchContent, setSearchContent] = useState('');
  const [loading, setLoading] = useState(true);

  const[savedExercises,setSavedExercises] = useState({});

  const [exerciseData, setExerciseData] = useState([]);

  const handleSearchButton = () => {
    console.log("searched key", searchContent)
    setLoading(false);

    searchExercise(searchContent);
  }

  const searchExercise = async (searchContent) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/name/${searchContent}?limit=10`;
    const data = await fetch(url, ExerciseDbOptions);
    const jsonData = await data.json();
    setExerciseData(jsonData);
    console.log(url);
  }

  const handleOnClickCard = (index) =>{
        const newSavedExercises = { ...savedExercises};
        newSavedExercises[index] = !newSavedExercises[index];
        setSavedExercises(newSavedExercises);
  }




  return (
    <div className=" h-screen ">
      <div className="h-8 w-screen mx-4 sm:flex sm:justify-center md:justify-center md:flex lg:h-14 lg:w-full ">
        <input
          type="search"
          className="hover:border hover:border-1 hover:border-black w-48  border-2 mt-2 rounded-md bg-slate-50 sm:w-64 sm:my-1 sm:p-2 lg:w-96 lg:my-2 lg:p-2" value={searchContent} onChange={(e) => setSearchContent(e.target.value)}
        ></input>
        <button className="w-16 border-2 ml-2 sm:my-1 md:text-white md:w-36 bg-green-400 lg:w-48 lg:my-2 " onClick={handleSearchButton}>
          Search
        </button>
      </div>

      {/* <div className="flex h-12 mt-4 w-full  overflow-x-auto ">
        {
          BodyPartName.map((data, i) => (
            <div className="h-full w-auto bg-red px-4 border border-black bg-green-500 mx-4 flex items-center justify-center">
              <h1 className="text-black text-md " key={i}>      {data}
              </h1>
            </div>
          )
          )
        }

      </div> */}

      {/* {
        loading ? <h1>Loading</h1> : <div className="border-8 w-full h-screen  p-4 border-black ">{searchContent}</div>
      } */}


      <div className=" h-auto mt-4 grid grid-cols-3 ">

        {
          searchContent === '' ? (<></>) : (

            exerciseData.map((data,index) => (
              <div className="w-96 h-96 m-4 border border-black flex flex-col shadow-lg hover:shadow-2xl  rounded-b-3xl " key={index} onClick={() => handleOnClickCard(index)}>
                <div className="h-8 border flex justify-end pr-4">
                <button>
                {savedExercises[index] ? '❤️' : '🤍'}
              </button>
                  </div>
              <img src={data.gifUrl} className="w-full h-60" alt={data.name}></img>
              <div className="flex flex-col">
                <h1 className="flex w-full font-bold text-xl justify-center my-2">{data.name}</h1>
                <div className="flex flex-row flex justify-between px-4">
                  <div className="border border-black px-2 bg-blue-400 rounded-xl">
                    <h1>{data.bodyPart}</h1>
                  </div>
                  <div className="border border-black px-3 bg-yellow-400 rounded-xl">
                    <h1>{data.equipment}</h1>
                  </div>
                </div>
              </div>
            </div>
            
            ))

          )
        }

      </div>


    </div>
  );
};

export default BrowseWorkout;
