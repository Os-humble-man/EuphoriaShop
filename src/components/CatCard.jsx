import React from 'react'

export default function CatCard(props) {
    return (
        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/5 px-2 md:px-5 mb-5" key={props.id}>
            <div className="">

                <img src={props.image} className=' w-full h-80 rounded-md object-cover' alt={props.title} />

            </div>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-xl text-zinc-800 py-2'>{props.title}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </div>
            <h2 className='text-gray-600'>Explore Now!</h2>
        </div>
    )
}
