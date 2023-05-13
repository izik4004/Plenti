import React from 'react'
import { section5 } from '../data'
import { FaApple } from "react-icons/fa"

const Section5 = () => {
    return (
        <div className=' bg-[#f2f7fe] flex lg:flex-row flex-col items-center justify-between p-10 mx-auto'>

            <div className='container mx-auto flex lg:flex-row space-y-10 flex-col items-center'>
                <div className='flex-1 text-center lg:text-left'>
                    <h2 className='text-5xl font-semibold'>{section5.title}</h2>
                    <p className='py-8'>{section5.subtext}</p>
                    <button className='bg-[#c72825] py-2.5 px-6 rounded-xl'>
                        <div className='flex items-center space-x-2'>
                            <FaApple style={{ color: "white" }} />
                            <p className='flex flex-col text-white pr-6'>
                                <small className='text-xs'>Download on the</small>
                                <small className='text-xs font-bold text-left'>App Store</small>
                            </p>

                        </div>
                    </button>
                </div>
                <div className='flex-1 flex justify-end '>
                    <img src={section5.Image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section5