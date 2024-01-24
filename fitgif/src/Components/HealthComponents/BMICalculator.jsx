import React, { useState } from 'react'
import GaugeChart from 'react-gauge-chart';
import GaugeComponent from 'react-gauge-component'

import { isValidate } from '../../Utils/IsValidateBmiFields';


import { BmiApiOptions, BmiApiURL } from '../../Utils/Api';

const BMICalculator = () => {
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const [ageFieldError, setAgeFieldError] = useState('');
    const [heightFieldError, setHeightFieldError] = useState('');
    const [weightFieldError, setWeightFieldError] = useState('');

    const [showAgeFieldError, setShowAgeFieldError] = useState(false);
    const [showHeightFieldError, setShowHeightFieldError] = useState(false);
    const [showWeightFieldError, setShowWeightFieldError] = useState(false);

    const [showGauge, setShowGauge] = useState(false);
    const [ApiData, setApiData] = useState('');
    const [BmiValue, setBmiwValue] = useState(0);

    const handleCalculateBMI = async () => {
        const isValidatedInputs = isValidate(age, weight, height, setShowAgeFieldError, setAgeFieldError, setShowWeightFieldError, setWeightFieldError, setShowHeightFieldError, setHeightFieldError);
        if (isValidatedInputs) {
            const response = await fetch(BmiApiURL+`age=${age}&weight=${weight}&height=${height}`, BmiApiOptions);
            const jsonData = await response.json();

            console.log(BmiApiURL+`age=${age}&weight=${weight}&height=${height}`);
            // console.log("jsondata",jsonData);
            setApiData(jsonData);
            setShowGauge(true);
        }
        console.log(age);
        console.log(weight);
        console.log(height);

        setBmiwValue(ApiData?.data?.bmi)
        console.log(BmiValue);
    };

    return (
        <div className='border border-black bg-slate-200 h-auto flex flex-col pt-2 w-full'>
            <div className='flex flex-col mx-auto justify-center p-2 '>
                <input placeholder='Enter age' value={age} className='p-2 rounded-md shadow-xl' onChange={(e) => setAge(e.target.value)}></input>
                {
                    showAgeFieldError ? <p className='text-red-700 text-sm mt-1'>{ageFieldError}</p> : <></>
                }
            </div>
            <div className='flex flex-col justify-center mx-auto p-2'>
                <input placeholder='Enter Weight(in Kgs)' value={weight} className='p-2 rounded-md shadow-xl' onChange={(e) => setWeight(e.target.value)}></input>
                {
                    showWeightFieldError ? <p className='text-red-700 text-sm mt-1'>{weightFieldError}</p> : <></>
                }
            </div>
            <div className='flex flex-col mx-auto justify-center p-2'>
                <input placeholder='Enter Height(in Cms)' value={height} className='p-2 rounded-md shadow-xl' onChange={(e) => setHeight(e.target.value)}></input>
                {
                    showHeightFieldError ? <p className='text-red-700 text-sm mt-1 '>{heightFieldError}</p> : <></>
                }
            </div>

            <button className='border  bg-green-400 mx-20 mt-2 mb-5 shadow-xl rounded-md sm:mx-auto sm:px-14 sm:py-1 lg:mx-auto lg:px-14  lg:py-1 ' onClick={handleCalculateBMI}>
                Calculate BMI
            </button>
            {
                showGauge ?
                    <GaugeComponent
                        value={BmiValue/100}
                        type="radial"
                        labels={{
                            tickLabels: {
                                type: "inner",
                                ticks: [
                                    { value: 20 },
                                    { value: 40 },
                                    { value: 60 },
                                    { value: 80 },
                                    { value: 100 }
                                ]
                            }
                        }}
                        arc={{
                            colorArray: ['#5BE12C', '#EA4228'],
                            subArcs: [{ limit: 20 }, { limit: 40 }, { limit: 60 }, { limit: 80 }, { limit: 100 }],
                            padding: 0.02,
                            width: 0.2,
                        }}
                        pointer={{
                            elastic: true,
                            animationDelay: 0
                        }}
                        className="lg:w-1/2 sm:w-full mx-auto"  // Adjust the width for large screens
                        style={{ height: "200px" }}    // Set a fixed height for the component
                    />
                    : <></>
            }
        </div>
    )
}

export default BMICalculator;
