import React from 'react'
import FooterTitle from '../components/FooterTitle'
import { footerLinks } from '../assets/data'

export default function Footer() {
    return (
        <div className=' bg-[#2A2F2F]'>
            <div className=' max-w-5xl mx-auto text-white py-10 flex justify-between'>

                {/* <div>
                    <FooterTitle title='Need Help' />
                    <ul>
                        <li className='py-3'>Contact Us</li>
                        <li className='py-3'>Track Order</li>
                        <li className='py-3'>Returns & Refunds</li>
                        <li className='py-3'>FAQ'S</li>
                        <li className='py-3'>Career</li>
                    </ul>
                </div>

                <div>
                    <FooterTitle title='Need Help' />
                    <ul>
                        <li className='py-3'>Contact Us</li>
                        <li className='py-3'>Track Order</li>
                        <li className='py-3'>Returns & Refunds</li>
                        <li className='py-3'>FAQ'S</li>
                        <li className='py-3'>Career</li>
                    </ul>
                </div>

                <div>
                    <FooterTitle title='Need Help' />
                    <ul>
                        <li className='py-3'>Contact Us</li>
                        <li className='py-3'>Track Order</li>
                        <li className='py-3'>Returns & Refunds</li>
                        <li className='py-3'>FAQ'S</li>
                        <li className='py-3'>Career</li>
                    </ul>
                </div>

                <div>
                    <FooterTitle title='Need Help' />
                    <ul>
                        <li className='py-3'>Contact Us</li>
                        <li className='py-3'>Track Order</li>
                        <li className='py-3'>Returns & Refunds</li>
                        <li className='py-3'>FAQ'S</li>
                        <li className='py-3'>Career</li>
                    </ul>
                </div>
                <div>
                    <div className='flex  w-full'>
                        <h1 className=' text-center text-2xl text-white font-bold'>Download The App</h1>
                    </div>
                </div> */}


                {
                    footerLinks.map((item, index) => {
                        return (
                            <FooterTitle title={item.title} text={item.text} key={index} />
                        )
                    })
                }

            </div>


        </div>
    )
}
