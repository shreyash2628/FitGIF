import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBarMenu from "./NavBarMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuButtonClicked = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  // const handleOnMouseOut = ()=>{
  //     setShowMenu(false);
  // };
 
  

  return (
    // <div className="flex flex-col  border-2 py-5 rounded-b-xl bg-slate-100 shadow-lg pl-2">
    //   <Link to={'/home'}><h1 className="text-lg font-bold  pr-3">Home</h1> </Link>
    //   <Link to={'/exerciseDetails'}><h1 className="text-lg font-bold  pr-3 ">Exercises</h1> </Link>
    //   <Link to={'/caloriesTracker'}><h1 className="text-lg font-bold  pr-3 ">Calories-Tracker</h1> </Link>
    //   <Link to={'/home'}><h1 className="text-lg font-bold  pr-3">Login</h1> </Link>
    // </div>

    <div className="relative border-4 shadow-lg bg-yellow-300">
    <div className="flex items-center">
      <button className="p-1 pl-2" onClick={handleMenuButtonClicked} >
        ☰
      </button>
      {showMenu && (
        <div
        className="absolute top-full left-0 ml-2 w-48 bg-white z-10 border-4"
        style={{ display: showMenu ? "block" : "none" }}
      >
          <NavBarMenu setShowMenu={setShowMenu}/>
        </div>
      )}
    </div>

    </div>
  );
};

export default Navbar;
