import React from 'react'
import hero from '../assets/banner.png'
import ShopBtn from '../components/ShopBtn'


export default function Header() {
    return (
        <div className=' bg-cover bg-center  h-screen' style={{ backgroundImage: `url(${hero})` }}>
            <div className=' max-w-7xl mx-auto '>
                <div className='relative'>
                    {/* left chevron */}
                    <div className='flex justify-between items-center h-[70vh]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" text-white w-10 h-10 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>



                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <div className=' absolute top-28 left-40 text-white'>
                        <div>
                            <h2 className=' text-lg font-bold py-5'>T-Shirt / Top</h2>
                            <h1 className='text-7xl font-bold'>Summer <br /> Value Pack</h1>
                            <h2 className=' text-lg font-bold py-8'>cool / colorful / comfly </h2>

                            <ShopBtn property='bg-white text-black' />
                        </div>
                    </div>
                </div>

                <div></div>
            </div>
        </div>
    )
}
