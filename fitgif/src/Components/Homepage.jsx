import React from 'react'
import { useNavigate } from 'react-router-dom'
import gymbuddies from "../Assets/banner.png";
import SearchExerciseByBodyParts from './SearchExerciseByBodyParts';
import BodyPartsGrid from './BodyPartsGrid';

const Homepage = () => {
    const navigate = useNavigate();
    const handleOnExploreExerciseButtonClick = () => {
        navigate('/exerciseDetails');
    }
    return (
        <div className='lg:w-screen lg:min-h-screen bg-slate-300'>
            <div className='flex flex-row'>
                <div className='border border-white w-2/3 h-screen'>
                    <div className=' h-screen flex flex-col items-center justify-center -m-16'>
                        <h1 className='text-red-600 lg:font-extrabold lg:text-6xl my-6 underline font-serif'>Fitness Club</h1>
                        <h1 className='text-black lg:font-bold lg:text-7xl underline my-2'>Sweat, Smilie</h1>
                        <h1 className='text-black lg:font-bold lg:text-6xl my-2 underline mb-8'>And Repeat</h1>
                        <button onClick={handleOnExploreExerciseButtonClick} className='border bg-red-600 text-white p-2  text-2xl rounded-md px-5 my-6 '>Explore Exercises</button>
                    </div>
                </div>
                <div>
                    <img src={gymbuddies} className='h-full w-full pb-16 mr-16' />
                </div>
            </div>

            <SearchExerciseByBodyParts/>
        </div>
    )
}

export default Homepage
