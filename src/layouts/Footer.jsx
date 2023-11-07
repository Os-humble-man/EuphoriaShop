import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import AppleStore from '../assets/pics/AppStore.png'
import googlePay from '../assets/pics/googlePlay.png'
import { footerLinks } from '../assets/data'

export default function Footer() {
    return (
        <div className=' bg-[#2A2F2F]'>
            <div className=' max-w-5xl mx-auto text-white py-10'>
                <div className=' flex justify-between'>
                    {
                        footerLinks.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h1 className='text-2xl font-bold py-2'>{item.title}</h1>
                                    <ul>
                                        {item.text.map((text, textIndex) => (
                                            <li className='py-2 cursor-pointer' key={textIndex}>{text}</li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=''>
                    <h1 className='text-2xl font-bold py-2 text-end'>Download</h1>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-4 text-black'>
                            <div className='bg-white p-2 rounded-md'>
                                <FaFacebookF />
                            </div>
                            <div className='bg-white p-2 rounded-md'>
                                <FaInstagram />
                            </div>
                            <div className='bg-white p-2 rounded-md'>
                                <FaTwitter />
                            </div>
                            <div className='bg-white p-2 rounded-md'>
                                <FaLinkedinIn />
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <img src={googlePay} className=' w-32' alt="" />
                            <img src={AppleStore} className=' w-32' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto pb-5'>

                <div className=' px-12 border-t border-b border-gray-500 py-5 flex justify-between'>
                    <p className='text-white font-bold text-2xl '>Popular Categories</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                </div>

            </div>
            <div>
                <h2 className='text-center font-bold text-white py-4'>Copyright &copy 2023 Euphoria Folks Pvt Ltd. All rights reserved.</h2>
            </div>
        </div>
    )
}
