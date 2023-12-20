import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import {Outlet} from 'react-router-dom';

//virtual trainer
//suggest exercise
//calories tracker
//plan exercise - different api / trainer side app

function App() {
  

  return (
    <div className="App">
      <Navbar/>
        <Outlet/>
    </div>
  );
}

export default App;
