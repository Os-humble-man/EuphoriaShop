import React from 'react'
import ShopBtn from './ShopBtn'
import { bannerImage } from '../assets/data'

export default function Banner() {
    return (
        <div className='max-w-6xl mx-auto pt-10'>
            <div className=' h-screen flex'>
                <div className='bg-cover bg-center h-4/5 w-1/2 rounded-l-lg -z-10' style={{ backgroundImage: `url(${bannerImage[0].image})` }}>
                    <div className=' py-36 px-10 text-white z-10'>
                        <h1 className='py-5 font-bold text-4xl'>WE MADE YOUR EVERYDAY FASHION BETTER</h1>
                        <p className='py-5'>In our journey to improve everyday fashion euphoria
                            presents EVERYDAY wear range - Comfortable & Affordable fashion 27/7</p>
                        <ShopBtn property='bg-white text-zinc-800' />
                    </div>

                </div>
                <div className='bg-cover bg-center h-4/5 w-1/2 rounded-r-lg' style={{ backgroundImage: `url(${bannerImage[1].image})` }}>
                </div>
            </div>
        </div>
    )
}
