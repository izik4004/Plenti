


import React from 'react'
import { section3 } from '../data'
import Carousel from './Carousel'
// import Multi from './Multi'

const Section3 = () => {

    return (
        <div className='bg-[#f5f2f8] '>
            <div className='container grid  lg:grid-cols-2 grid-cols-1 lg:flex-row p-10 flex-col items-center justify-center lg:p-20 mx-auto'>

                <div className='flex-1'>
                    <div>
                        <h2 className='text-5xl font-semibold'>{section3.title}</h2>
                        <p className='py-8'>{section3.subtext}</p>
                        <a href="#" className='py-6 text-lg text-[#5480f4]'>{section3.btnText}</a>

                    </div>
                    <div className="hidden lg:block">
                        <Carousel />
                    </div>
                </div>
                <div className='flex-1 flex justify-end pt-6 lg:pt-0'>
                    <img src={section3.Image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section3