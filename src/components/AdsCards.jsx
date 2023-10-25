import React from 'react'
import { adsImages } from '../assets/data'

export default function AdsCards() {
    return (
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 py-28 gap-8'>

            {adsImages.map((item) => {
                return (
                    <div className='bg-white shadow-2xl rounded-lg bg-cover bg-center  w-full' style={{ backgroundImage: `url(${item.image})` }} key={item.id}>
                        <div className=' py-16 text-white pl-10'>
                            <h2 className='text-3xl font-bold py-5'>{item.cardTitle}</h2>
                            <h1 className='text-4xl font-bold py-2 w-4/5'>{item.cardSubtitle}</h1>
                            <h3 className=' font-light text-2xl'>{item.cardText}</h3>
                            <h2 className='font-bold underline text-3xl'>{item.cardLink}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
