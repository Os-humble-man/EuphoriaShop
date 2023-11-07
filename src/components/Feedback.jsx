import React, { useState } from 'react'
import { Rating } from "react-simple-star-rating"
import TitleComp from './TitleComp';
import { feedback } from '../assets/data'

export default function Feedback() {
    console.log(feedback);
    return (
        <div className=' max-w-6xl mx-auto py-10'>
            <TitleComp text='Feedback' />
            <div className="py-10 flex gap-10">
                <div className='border-gray-400 border-2 p-5 w-1/3 rounded-lg'>
                    <div>
                        <img src={feedback[0].image} alt="" className="w-1/5 h-1/5" />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold py-3'>{feedback[0].userName}</h2>
                        <p className='text-gray-500'>{feedback[0].content}</p>
                    </div>
                </div>

                <div className='border-gray-400 border-2 p-5 w-1/3 rounded-lg'>
                    <div>
                        <img src={feedback[0].image} alt="" className="w-1/5 h-1/5" />



                    </div>
                    <div>
                        <h2 className='text-xl font-bold py-3'>{feedback[0].userName}</h2>
                        <p className='text-gray-500'>{feedback[0].content}</p>
                    </div>
                </div>

                <div className='border-gray-400 border-2 p-5 w-1/3 rounded-lg'>
                    <div>
                        <img src={feedback[0].image} alt="" className="w-1/5 h-1/5" />



                    </div>
                    <div>
                        <h2 className='text-xl font-bold py-3'>{feedback[0].userName}</h2>
                        <p className='text-gray-500'>{feedback[0].content}</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center gap-1'>
                <span className=' w-2 h-2 rounded-full bg-gray-800 cursor-pointer'></span>
                <span className=' w-2 h-2 rounded-full bg-gray-200 cursor-pointer'></span>
                <span className=' w-2 h-2 rounded-full bg-gray-200 cursor-pointer'></span>
            </div>

        </div>
    )
}
