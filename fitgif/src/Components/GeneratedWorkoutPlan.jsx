import React, { useEffect } from 'react';
import Down from '../Assets/down.png';
import { useState } from 'react';

import { WorkoutPlannerOptions, WorkOutPLannerUrl } from '../Utils/Api';

const GeneratedWorkoutPlan = ({ workOutPlannerApiData }) => {

    const [openWarmUpSection, setOpenWarmUpSection] = useState(false);
    const [openMainExercisesSection, setOpenMainExercisesSection] = useState(false);
    const [openCoolDownSection, setOpenCoolDownSection] = useState(false);
    // const api_key = process.env.REACT_APP_WORK_OUT_PLANNER_API_KEY;

    // console.log(api_key);

    // useEffect(async ()=>  {
    //     const response = await fetch(WorkOutPLannerUrl, WorkoutPlannerOptions);
    //     const result = await response.text();
    //         console.log(result);
    // },[]);
    console.log(workOutPlannerApiData);

    return (

        <div className='text-black  p-2 h-auto'>
            <div className='h-1 bg-black  border border-black'></div>

            <div className='h-6 border  mt-3 flex flex-row justify-between px-2' onClick={() => setOpenWarmUpSection(!openWarmUpSection)}>
                <h3 className=''> Warm-Up</h3>
                <img src={Down}></img>
            </div>


            {openWarmUpSection ? (
                workOutPlannerApiData.Exercises.map((info, index) => (
                    <div key={index} className='h-6 border mt-3 flex flex-col justify-between px-2'>
                        <h1>{info.Exercise}</h1>
                        <h1>{info.Reps}</h1>
                        <h1>{info.Sets}</h1>
                    </div>
                ))
            )
                    : <></>
            }


            <div className='h-6 border  mt-3 flex flex-row justify-between px-2' onClick={() => setOpenMainExercisesSection(!openMainExercisesSection)}>
                <h3 className=''> Main Exercises</h3>

                <img src={Down}></img>
            </div>

            {
                openMainExercisesSection ?
                    <div className='h-6 border  mt-3 flex flex-row justify-between px-2'>
                        <h3 className=''>TRUEEEEEE</h3>
                    </div> : <></>
            }

            <div className='h-6 border  mt-3 flex flex-row justify-between px-2' onClick={() => setOpenCoolDownSection(!openCoolDownSection)}>
                <h3 className=''> Cool Down</h3>

                <img src={Down}></img>
            </div>

            {
                openCoolDownSection ?
                    <div className='h-auto border  mt-3 flex flex-row justify-between px-2'>
                        <h3 className=''>TRUEEEEEE</h3>
                    </div> : <></>
            }
        </div>
    )
}

export default GeneratedWorkoutPlan;
