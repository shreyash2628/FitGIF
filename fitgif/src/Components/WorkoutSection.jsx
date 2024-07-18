import React, { useState } from "react";
import BrowseWorkout from "./BrowseWorkout";
import SavedWorkout from "./SavedWorkout";

const WorkoutSection = () => {
  const [browseWorkoutButtonSelected, setBrowseWorkoutButtonSelected] =
    useState(false);
  const [savedWorkoutButtonSelected, setSavedWorkoutButtonSelected] =
    useState(false);

  const handleBrowseWorkoutButton = () => {
    setBrowseWorkoutButtonSelected(true);
    setSavedWorkoutButtonSelected(false);
  };
  const handleSavedWorkoutButton = () => {
    setSavedWorkoutButtonSelected(true);
    setBrowseWorkoutButtonSelected(false);
  };
  return (
    <div>
      <div className="w-screen ">

      </div>
      <div className="h-12  w-screen ">

        
        <div className="mx-4 p-4 flex justify-between md:justify-center  ">
          <button
            className="underline   rounded-lg sm:text-xl sm:font-bold sm:mx-14  md:mx-14  md:text-2xl md:font-extrabold"
            onClick={handleBrowseWorkoutButton}
            style={{
              textDecoration: browseWorkoutButtonSelected
                ? "underline"
                : "none",
            }}
          >
            Browse Workout
          </button>
          <button className="  sm:text-xl sm:font-bold sm:mx-14  md:mx-14  md:text-2xl md:font-extrabold"
            onClick={handleSavedWorkoutButton}
            style={{
              textDecoration: savedWorkoutButtonSelected ? "underline" : "none",
            }}
          >
            Saved Workout
          </button>
        </div>

      </div>
      <div className="w-screen p-8 h-screen border-4 sm:w-screen sm:h-screen sm:p-14 md:w-screen md:h-screen md:p-16 lg:w-screen lg:h-screen lg:p-18">
        
        {browseWorkoutButtonSelected?<BrowseWorkout/>:<SavedWorkout/>}
        </div>
    </div>
  );
};

export default WorkoutSection;
