import React from 'react'
import { BodyParts } from '../Utils/ExerciseScrollbarData';

const BodyPartsGrid = () => {
    return (
        <div className='lg:grid lg:grid-cols-4 lg:gap-4  '>
            {
                BodyParts.map((data, i) => {
                    return (
                        <div className='lg:w-48 lg:hover:cursor-pointer shadow-2xl hover:shadow-black  lg:h-48 lg:mx-4 lg:mb-8 '>
                            <div className='lg:flex lg:flex-col lg:h-48   '>
                                <img src={data.img} className='lg:h-48 '/>
                                <h1 className='flex justify-center lg:text-xl font-bold'>
                                    {data.name}
                                </h1>

                            </div>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default BodyPartsGrid;
