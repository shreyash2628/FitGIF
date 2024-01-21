import React from 'react'

const LocationDropDown = ({setSelectedLocation,setShowLocation}) => {
  return (
    <div className='flex flex-col h-15 bg-slate-200 border border-black w-full overflow-y-auto' onClick={() => setShowLocation(false)}>
      <button className='flex justify-start border border-black w-full pl-1' onClick={() => setSelectedLocation('Home')}>
        Home
      </button>
      <button className='flex justify-start border border-black w-full pl-1' onClick={() => setSelectedLocation('Gym')}>
        Gym
      </button>

    </div>
  )
}

export default LocationDropDown;
