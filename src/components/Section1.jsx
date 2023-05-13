
import React from 'react'
import { services1, networks } from "../data";

const Section1 = () => {
    
  return (
    <div className='container flex lg:flex-row flex-col lg:space-x-20 items-center p-10 mx-auto'>
         
        <div className='flex-1'>
        <img src={services1.Image} alt="" />
        </div>
        <div className='flex-1'>
            <h2 className='text-5xl font-semibold'>{services1.title}</h2>
            <p className='py-8'>{services1.subtext}</p>
            <span>Get Started</span>
            
            <div className="lg:flex grid grid-cols-2 lg:justify-between mt-20">
                {networks.map((network) => (
                    <img src={network} alt=""/>
                ))}

            </div>
        </div>
        
    </div>
  )
}

export default Section1