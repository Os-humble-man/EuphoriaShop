import React from 'react'
import { cardInfo } from '../assets/data'

import TitleComp from './TitleComp'
export default function NewArrival() {
    return (
        <div className='max-w-6xl mx-auto pb-20'>
            <TitleComp text='New Arrival' />
            <div className='flex justify-center items-center py-10'>
                {/* left arrow */}
                <div className='flex items-center justify-start w-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </div>

                <div className='flex justify-center flex-wrap w-full space-x-7'>
                    {
                        cardInfo.map((item) => {
                            return (
                                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2 md:px-2 mb-5 flex flex-col flex-grow' key={item.id}>
                                    <img src={item.image} alt="" className='rounded-md object-cover h-52 w-full' />
                                    <h3 className='text-xl font-bold text-zinc-800 py-5'>{item.title}</h3>
                                </div>
                            )
                        })
                    }
                </div>

                {/* right arrow */}
                <div className='flex items-center justify-end w-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>

        </div>
    )
}
