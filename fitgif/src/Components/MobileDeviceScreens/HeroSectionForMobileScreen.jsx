import React, { useState } from "react";
import BrowseWorkoutForMobileScreen from "./BrowseWorkoutForMobileScreen";
import SavedWorkoutForMobileScreen from "./SavedWorkoutForMobileScreen";

const HeroSectionForMobileScreen = () => {
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
      <div className="h-12  w-screen ">
        <div className="mx-4 p-4 flex justify-between">
          <button
            className="underline"
            onClick={handleBrowseWorkoutButton}
            style={{
              textDecoration: browseWorkoutButtonSelected
                ? "underline"
                : "none",
            }}
          >
            Browse Workout
          </button>
          <button
            onClick={handleSavedWorkoutButton}
            style={{
              textDecoration: savedWorkoutButtonSelected ? "underline" : "none",
            }}
          >
            Saved Workout
          </button>
        </div>


      </div>
      <div className="w-screen h-screen border-4">
        
        {browseWorkoutButtonSelected?<BrowseWorkoutForMobileScreen/>:<SavedWorkoutForMobileScreen/>}
        </div>
    </div>
  );
};

export default HeroSectionForMobileScreen;
