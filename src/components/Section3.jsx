


import React from 'react'
import { section3 } from '../data'
import Carousel from './carousel/Carousel'
import Multi from './Multi'

const Section3 = () => {

  return (
    <div className='bg-[#f5f2f8] '>
    <div className='container grid grid-cols-2 lg:flex-row flex-col items-center justify-center p-20 mx-auto'>
        
        <div className='flex-1'>
            <div>
            <h2 className='text-5xl font-semibold'>{section3.title}</h2>
            <p className='py-8'>{section3.subtext}</p>
            <span>{section3.btnText}</span>
            </div>
            
            <Multi/>
                {/* <Carousel  /> */}
        </div>
        <div className='flex-1 flex justify-end'>
        <img src={section3.Image} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Section3