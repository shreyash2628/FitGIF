import React, { useState } from 'react';
import downicon from '../Assets/down.png';

const WorkoutPlan = () => {
    const[showMuscleDropDown,setShowMuscleDropDown] = useState(false);

    const handleOnDownArrowClickForSelectMuscle = ()=>{
        console.log("hi");
    }

  return (
    <div className='p-5 border border-4 w-screen h-screen bg-slate-800'>
            <div className='bg-white h-screen flex flex-col'>
                <h1 className='flex justify-center pt-2'>Create Workout Plan</h1>
                
               <div className='bg-white w-56 h-6 m-2 flex flex-row'>
                        <input className=' px-2 w-28 ' placeholder='select muscle'>
                        </input>
                        <img src={downicon} className='w-5  bg-white' alt="" onClick={handleOnDownArrowClickForSelectMuscle} />
               </div>

            </div>
    </div>
  )
}

export default WorkoutPlan;
