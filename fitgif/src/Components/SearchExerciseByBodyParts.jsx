import React from 'react'
import TextField from '@mui/material/TextField';
import BodyPartsGrid from './BodyPartsGrid';

const SearchExerciseByBodyParts = () => {
    return (
        <div className='w-screen min-h-screen  h-auto'>
            <div className='flex flex-col'>
                <h1 className='text-black text-5xl font-bold underline flex justify-center'>Awesome Exercises You Should Know</h1>
                <div className='flex flex-row justify-center mx-48'>
                    <div className='mx-2 w-full mt-8 flex flex-row '>
                        <TextField id="outlined-basic" label="Exercise" variant="outlined" className='mt-4 border bg-gray-200 w-full justify-center' />
                    </div>
                    <button className='bg-red-600 text-white text-2xl rounded-md px-8 py-2 ml-1 mt-8'>Search </button>
                </div>
            </div>
            <div className='lg:w-full lg:h-full lg:flex lg:flex-row lg:justify-center lg:mt-20 '>
            <BodyPartsGrid/>

            </div>
        </div>
    )
}

export default SearchExerciseByBodyParts
