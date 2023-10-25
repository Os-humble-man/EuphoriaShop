import React from 'react'
import TitleComp from './TitleComp'
import CatCard from './CatCard'
import { MenCategoriesImages } from '../assets/data'

export default function MenCategories() {
    return (
        <div className='max-w-6xl mx-auto '>
            <TitleComp text='Categories For Men' />
            <div className='flex flex-col md:flex-row  flex-wrap -mx-2 md:-mx-5 justify-center py-5'>
                {


                    MenCategoriesImages.map((item) => {
                        return (

                            <CatCard image={item.image} title={item.title} key={item.id} />
                        )
                    })


                }
            </div>
            <TitleComp text='Categories For Women' />

            <div className='flex flex-col md:flex-row  flex-wrap -mx-2 md:-mx-5 justify-center py-5'>
                {


                    MenCategoriesImages.map((item) => {
                        return (

                            <CatCard image={item.image} title={item.title} key={item.id} />
                        )
                    })


                }
            </div>

        </div>
    )
}
