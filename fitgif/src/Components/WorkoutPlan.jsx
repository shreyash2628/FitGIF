import React, { useState } from 'react';
import downicon from '../Assets/down.png';
import MuscleGroupDropDown from './DropDowns/MuscleGroupDropDown';
import EquipmentDropDown from './DropDowns/EquipmentDropDown';
import LocationDropDown from './DropDowns/LocationDropDown';
import { WorkoutPlannerOptions,WorkOutPLannerUrl } from '../Utils/Api';

import GeneratedWorkoutPlan from './GeneratedWorkoutPlan';


const WorkoutPlan = () => {
    const [showMuscleDropDown, setShowMuscleDropDown] = useState(false);
    const [showEquipmentDropDown, setShowEquipmentDropDown] = useState(false);
    const [showLocation, setShowLocation] = useState(false);

    const [showGeneratedWorkout, setShowGeneratedWorkout] = useState(true);

    const [workOutPlannerApiData , setWorkOutPlannerApiData] = useState('');


    const[selectedMuscle,setSelectedMuscle] = useState('');
    const[selectedLocation,setSelectedLocation] = useState('');
    const[selectedEquipment,setSelectedEquipment] = useState('');




    const handleOnDownArrowClickForSelectMuscle = () => {
        setShowMuscleDropDown(!showMuscleDropDown);
    };

    const handleOnDownArrowClickForEquipment = () => {
        setShowEquipmentDropDown(!showEquipmentDropDown);
    };

    const handleOnDownArrowClickForLocation = () => {
        setShowLocation(!showLocation);
    };

    const  handleGenerateWorkoutPlan = async () => {
        // setShowTime(!showTime);
        setShowGeneratedWorkout(true);

        const response = await fetch(WorkOutPLannerUrl,WorkoutPlannerOptions);
        const result =await response.json();
            setWorkOutPlannerApiData(result);
    };

    return (
        <div className='p-5 border border-4 w-screen h-screen bg-slate-800'>
            <div className='bg-white h-auto flex flex-col'>
                <h1 className='flex justify-center pt-2 pb-2'>Create Workout Plan</h1>

                <div className='bg-white w-auto h-auto m-2 flex flex-col sm:px-24  md:px-36 lg:px-96'>
                    {/* select muscle  */}
                    <h1 className=' mt-5 mb-1'>Select Muscle </h1>
                    <div className='flex flex-row border border-black bg-red-400  h-7  lg:h-10 '>
                        <input className=' px-2 w-full ' placeholder=' Muscles' value={selectedMuscle}>
                        </input>
                        <img src={downicon} className='w-5 lg:w-7 bg-white' alt="" onClick={handleOnDownArrowClickForSelectMuscle} />
                    </div>

                    {
                        showMuscleDropDown ? <MuscleGroupDropDown setSelectedMuscle={setSelectedMuscle} setShowMuscleDropDown={setShowMuscleDropDown}/> : <></>
                    }


                    {/* Equipment */}
                    <h1 className=' mt-5 mb-1'>Select Equipment </h1>

                    <div className='flex flex-row border border-black bg-red-400  h-7 lg:h-10'>
                        <input className=' px-2 w-full ' placeholder='Equipments' value={selectedEquipment}>
                        </input>
                        <img src={downicon} className='w-5 lg:w-7 bg-white' alt="" onClick={handleOnDownArrowClickForEquipment} />
                    </div>
                    {
                        showEquipmentDropDown?<EquipmentDropDown setSelectedEquipment={setSelectedEquipment} setShowEquipmentDropDown={setShowEquipmentDropDown}/>:<></>
                    }

                    {/* Location */}
                    <h1 className=' mt-5 mb-1'>Select Location of Exercise </h1>

                    <div className='flex flex-row border  border-black   h-7 lg:h-10'>
                        <input className=' px-2 w-full ' placeholder='Location' value={selectedLocation}>
                        </input>
                        <img src={downicon} className='w-5 lg:w-7  bg-white' alt="" onClick={handleOnDownArrowClickForLocation} />
                    </div>

                    {
                        showLocation?<LocationDropDown setSelectedLocation={setSelectedLocation} setShowLocation={setShowLocation}/>:<></>
                    }
                    {/* Time */}
                    <h1 className=' mt-5 mb'>Select Time  </h1>

                    <div className='flex flex-row border border-black bg-red-400 h-7 lg:h-10'>
                        <input className=' px-2 w-full ' placeholder='Time (in mins)'>
                        </input>
                    </div>

                    <button className='flex border border-black bg-green-400 mt-5 h-7 justify-center lg:h-10 items-center ' onClick={handleGenerateWorkoutPlan}>
                        Generate Wrokout Plan
                    </button>

                </div>

                 {
                    showGeneratedWorkout?<GeneratedWorkoutPlan workOutPlannerApiData={workOutPlannerApiData}/>:<></>
                 }       

            </div>
        </div>
    )
}

export default WorkoutPlan;
