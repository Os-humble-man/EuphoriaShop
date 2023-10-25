import React from 'react'
import TitleComp from './TitleComp'
import img from '../assets/pr1.jpeg'
import ShopBtn from './ShopBtn'
import { productInfo } from '../assets/data'

export default function Promotion() {
  return (
    <div className='max-w-6xl mx-auto'>
      <TitleComp text='Big Saving Zone' />
      <div className='py-10 grid grid-flow-col grid-rows-2 grid-cols-3 gap-4'>
        {productInfo.map((item, index) => (
          <div
            key={index}
            className={`bg-cover bg-center ${item.textColor} py-20 pl-10 rounded-lg 
            ${index === 1 ? 'row-start-1 col-start-1' : ''} ${index === 2 ? 'row-start-1 col-start-2 col-span-2' : ''}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div>
              <h1 className='text-4xl font-bold'>{item.text}</h1>
              <p className='py-5'>{item.text2}</p>
              <h2 className='font-bold text-2xl'>{item.text3}</h2>
            </div>
            <div className='py-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75' />
              </svg>
            </div>
            <ShopBtn property={item.btnProperty} />
          </div>






        ))}
      </div>
    </div>




  )
}
