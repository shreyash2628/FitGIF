// import React, { useEffect ,useState} from "react";

// const Home = () => {

//   const[bodyPartsList,setBodyPartsList]=useState([]);
//   const[data,setData] = useState([]);


//   const arr = [
//     'Head',
//     'Neck',
//     'Shoulders',
//     'Chest',
//     'Back',
//     'Biceps',
//     'Triceps',
//     'Forearms',
//     'Abdomen',
//     'Hips',
//     'Thighs',
//     'Knees',
//     'Calves',
//     'Hamstring'
//   ];


//   // const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
//   // const options = {
//   //   method: "GET",
//   //   headers: {
//   //     //limit crossed-> "X-RapidAPI-Key": "2e103b104emsh0be9fb60757904dp1d702ajsnfb9d0f6dbdce",
//   //    // "X-RapidAPI-Key": "7918c7cb22msh8abcfea0b3ea07fp1b16a3jsnb3a7ac85c18e",
//   //     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//   //   },
//   // };


   

//     useEffect(() => {
//       setBodyPartsList(arr);
//     },[]);

     

//       // const fetchData = async () => {
//       //   const response = await fetch(url, options);
//       //   const result = await response.json();
//       //   setData(result);

//       //   // setX(Array.isArray(result));
//       //   // console.log(x);
//       // };
//    //   console.log("data is ",bodyPartsList);


//       if(bodyPartsList.length===0)
//       {
//         return <h1>DATA</h1>
//       }

//   return (
//     <div>
//       {
//          <div className="flex flex-row pt-4 overflow-x-auto">
//          {bodyPartsList.map((x, index) => (
//            <div key={index} className="px-2 border-2 w-64 h-28 flex items-center justify-center">
//              <h1>{x}</h1>
//            </div>
//          ))}
//        </div>
//         // <div className="flex flex-row pt-4  overflow-scroll ">
//         //     {
//         //         bodyPartsList.map((x)=>{
//         //           return (
//         //             <div className="px-2  border-2 w-full h-28">
//         //                 <h1 className="">{x}</h1>

//         //             </div>)
//         //         })
//         //     }
//         // </div>
      
//        //<h1>{bodyPartsList[0]}</h1>
//       }
//        </div>
//   )
// }

// export default Home

import React from 'react';
import HeroSectionForMobileScreen from './MobileDeviceScreens/HeroSectionForMobileScreen';

const Home = () => {
  return (
    <div>
      <HeroSectionForMobileScreen/>
    </div>
  )
}

export default Home
