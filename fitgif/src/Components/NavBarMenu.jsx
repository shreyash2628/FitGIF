import React from 'react'
import { Link } from "react-router-dom";

const NavBarMenu = () => {
  return (
    <div>
        <div >
         <div className="flex flex-col  border-2 py-5 rounded-b-xl bg-slate-100 shadow-lg pl-2">
       <Link to={'/home'}><h1 className="text-lg font-bold  pr-3">Home</h1> </Link>
       <Link to={'/exerciseDetails'}><h1 className="text-lg font-bold  pr-3 ">Exercises</h1> </Link>
       <Link to={'/caloriesTracker'}><h1 className="text-lg font-bold  pr-3 ">Calories-Tracker</h1> </Link>
       <Link to={'/home'}><h1 className="text-lg font-bold  pr-3">Login</h1> </Link>
     </div>

        </div>
    </div>
  )
}

export default NavBarMenu;
