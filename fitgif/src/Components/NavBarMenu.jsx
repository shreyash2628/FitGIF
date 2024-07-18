import React from 'react'
import { Link } from "react-router-dom";
import Homepage from './Homepage';

const NavBarMenu = ({setShowMenu}) => {
  const handleOnMouseOut = ()=>{
      setShowMenu(false);
  };

  const handleOnClickOfLink = ()=>{
    setShowMenu(false);
  };

  return (
    <div>
        <div  >
         <div className="flex flex-col  border-2 py-5 rounded-b-xl bg-slate-200 shadow-lg pl-2" onMouseLeave={handleOnMouseOut}>
       <Link to={'/'}><h1 onClick={handleOnClickOfLink} className="text-lg font-bold  pr-3">Home</h1> </Link>
       <Link to={'/exerciseDetails'}><h1 onClick={handleOnClickOfLink} className="text-lg font-bold  pr-3 ">Explore Exercises</h1> </Link>
       <Link to={'/caloriesTracker'}><h1 onClick={handleOnClickOfLink} className="text-lg font-bold  pr-3 ">Calories-Tracker</h1> </Link>
       <Link to={'/workoutPlan'}><h1 onClick={handleOnClickOfLink} className="text-lg font-bold  pr-3">Get Workout Plan</h1> </Link>
     </div>

        </div>
    </div>
  )
}

export default NavBarMenu;
