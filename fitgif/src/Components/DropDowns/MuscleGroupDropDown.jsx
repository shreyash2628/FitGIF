import React from 'react'

const MuscleGroupDropDown = ({ setSelectedMuscle, setShowMuscleDropDown }) => {
    return (
        <div className='flex flex-col h-24  border border-black w-full overflow-y-auto' onClick={() => setShowMuscleDropDown(false)}>
            <button className='flex justify-start  w-full pl-1' onClick={() => setSelectedMuscle('Chest')}>
                Chest
            </button>
            <button className='flex justify-start  w-full pl-1' onClick={() => setSelectedMuscle('Triceps')}>
                Triceps
            </button>
            <button className='flex justify-start  w-full pl-1' onClick={() => setSelectedMuscle('Back')}>
                Back
            </button>
            <button className='flex justify-start  w-full pl-1' onClick={() => setSelectedMuscle('Biceps')}>
                Biceps
            </button>
            <button className='flex justify-start  w-full pl-1' onClick={() => setSelectedMuscle('Shoulder')}>
                Shoulder
            </button>
            <button className='flex justify-start  w-full pl-1' onClick={() => setSelectedMuscle('Legs')}>
                Legs
            </button>
            <button className='flex justify-start  w-full pl-1' onClick={() => setSelectedMuscle('Abs')}>
                Abs
            </button>

        </div>
    )
}

export default MuscleGroupDropDown;
