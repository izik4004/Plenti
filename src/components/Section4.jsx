import React from 'react'
import { section4 } from '../data'
import { GrFormCheckmark } from "react-icons/gr"

const Section4 = () => {
    const { items } = section4
    return (
        <div className='container flex lg:flex-row flex-col items-center justify-center lg:p-20 p-10 mx-auto'>

            <div className='lg:flex-1'>
                <img src={section4.Image} alt="" />
            </div>
            <div className='lg:flex-1'>
                <h2 className='text-5xl font-semibold'>{section4.title}</h2>
                <p className='py-8'>{section4.subtext}</p>
                <ul>
                    {items.map((item) =>
                    (
                        <li className='py-2 flex items-center gap-4'>
                            <span className='bg-[#2CD15B] rounded-md p-1'>
                                <GrFormCheckmark style={{ color: 'white' }} />
                            </span>
                            {item.caption}
                        </li>
                    )
                    )}
                </ul>
                <p className='py-6'>
                    <a href="#" className='text-xl text-[#5480f4]'>Get Started</a>
                </p>
            </div>

        </div>
    )
}

export default Section4