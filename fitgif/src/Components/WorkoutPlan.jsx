import React, { useState } from 'react';
import downicon from '../Assets/down.png';
import MuscleGroupDropDown from './DropDowns/MuscleGroupDropDown';
import EquipmentDropDown from './DropDowns/EquipmentDropDown';
import LocationDropDown from './DropDowns/LocationDropDown';


const WorkoutPlan = () => {
    const [showMuscleDropDown, setShowMuscleDropDown] = useState(false);
    const [showEquipmentDropDown, setShowEquipmentDropDown] = useState(false);
    const [showLocation, setShowLocation] = useState(false);

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

    const handleGenerateWorkoutPlan = () => {
        // setShowTime(!showTime);
    };

    return (
        <div className='p-5 border border-4 w-screen h-screen bg-slate-800'>
            <div className='bg-white h-screen flex flex-col'>
                <h1 className='flex justify-center pt-2 pb-2'>Create Workout Plan</h1>

                <div className='bg-white w-auto h-auto m-2 flex flex-col  '>
                    {/* select muscle  */}
                    <div className='flex flex-row border border-black bg-red-400  h-7'>
                        <input className=' px-2 w-full ' placeholder='Select Muscle' value={selectedMuscle}>
                        </input>
                        <img src={downicon} className='w-5  bg-white' alt="" onClick={handleOnDownArrowClickForSelectMuscle} />
                    </div>

                    {
                        showMuscleDropDown ? <MuscleGroupDropDown setSelectedMuscle={setSelectedMuscle} setShowMuscleDropDown={setShowMuscleDropDown}/> : <></>
                    }


                    {/* Equipment */}

                    <div className='flex flex-row border border-black bg-red-400 mt-5 h-7'>
                        <input className=' px-2 w-full ' placeholder='Equipment' value={selectedEquipment}>
                        </input>
                        <img src={downicon} className='w-5  bg-white' alt="" onClick={handleOnDownArrowClickForEquipment} />
                    </div>
                    {
                        showEquipmentDropDown?<EquipmentDropDown setSelectedEquipment={setSelectedEquipment} setShowEquipmentDropDown={setShowEquipmentDropDown}/>:<></>
                    }

                    {/* Location */}

                    <div className='flex flex-row border  border-black  mt-5 h-7'>
                        <input className=' px-2 w-full ' placeholder='Location' value={selectedLocation}>
                        </input>
                        <img src={downicon} className='w-5  bg-white' alt="" onClick={handleOnDownArrowClickForLocation} />
                    </div>

                    {
                        showLocation?<LocationDropDown setSelectedLocation={setSelectedLocation} setShowLocation={setShowLocation}/>:<></>
                    }
                    {/* Time */}

                    <div className='flex flex-row border border-black bg-red-400 mt-5 h-7'>
                        <input className=' px-2 w-full ' placeholder='Time (in mins)'>
                        </input>
                    </div>

                    <button className='flex border border-black bg-green-400 mt-5 h-7 justify-center '>
                        Generate Wrokout Plan
                    </button>

                </div>

            </div>
        </div>
    )
}

export default WorkoutPlan;
