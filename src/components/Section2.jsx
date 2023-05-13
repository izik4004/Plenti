import React from 'react'
import { services2, services3 } from "../data"

const Section2 = () => {
    return (
        <section className=' flex justify-between flex-col lg:flex-row'>


            <div className='flex mx-auto lg:p-20 p-10 items-center justify-center bg-[#f2fef7]  flex-1'>
                <div className='lg:w-3/4'>
                    <h2 className='text-5xl font-bold'>{services2.title}</h2>
                    <p className='py-6 text-lg '>{services2.subtext}</p>
                    <img src={services2.Image} alt="" />
                </div>
            </div>
            <div className='flex mx-auto lg:p-20 p-10 items-center justify-center bg-[#fff9f1] flex-1'>
                <div className='lg:w-3/4'>
                    <h2 className='text-5xl font-bold'>{services3.title}</h2>
                    <p className='py-6 text-lg '>{services3.subtext}</p>
                    <img src={services3.Image} alt="" />
                </div>
            </div>


        </section>
    )
}

export default Section2