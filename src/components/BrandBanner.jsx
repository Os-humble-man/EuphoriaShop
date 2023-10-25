import React from 'react'
import { logoImages } from '../assets/data'

export default function BrandBanner() {
    return (
        <div className=' max-w-6xl mx-auto pb-10' >
            <div className=' bg-[#3C4242] rounded-lg text-white py-14 px-20'>
                <h1 className=' font-extrabold text-5xl py-3 text-center '>Top Brand Deal</h1>
                <p className='py-8 text-2xl text-center'>UP TO <span className=' text-yellow-500'>60%</span> off on brands</p>
                <div className='flex items-center space-x-8'>
                    {
                        logoImages.map((item) => {
                            return (
                                <div className=' bg-white rounded-lg  w-60 h-28 flex justify-center items-center p-5' key={item.id}>
                                    <img src={item.logo} alt="" className='' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}
