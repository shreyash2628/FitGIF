import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Exercise from './Components/Exercise';
import HealthTracker from './Components/HealthComponents/HealthTracker';
import WorkoutPlan from './Components/WorkoutPlan';
import Homepage from './Components/Homepage';


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Homepage/>
      },
    
      {
        path:'/exerciseDetails',
        element:<Exercise/>
      },{
        path:'/caloriesTracker',
        element:<HealthTracker/>
      },{
        path:'/workoutPlan',
        element:<WorkoutPlan/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <RouterProvider router={appRouter}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
