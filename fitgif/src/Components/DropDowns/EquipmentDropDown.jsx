import React from 'react'

const EquipmentDropDown = ({setSelectedEquipment,setShowEquipmentDropDown}) => {
    return (
        <div className='flex flex-col h-auto bg-slate-200 border border-black w-full overflow-y-auto' onClick={()=>{
            setShowEquipmentDropDown(false);
        }}>
            <button className='flex justify-start border border-black w-full pl-1' onClick={()=>{setSelectedEquipment('Bench')}}>
                Bench
            </button>
            <button className='flex justify-start border border-black w-full pl-1' onClick={()=>{setSelectedEquipment('Dumbbells')}}>
                Dumbbells
            </button>
            <button className='flex justify-start border border-black w-full pl-1' onClick={()=>{setSelectedEquipment('Rope')}}>
                Rope
            </button>

        </div>
    )
}

export default EquipmentDropDown;
