import React from 'react'
import { hero } from "../data"
import {FaGooglePlay, FaApple} from "react-icons/fa"

const Hero = () => {

  return (
    <div className='bg-[#FFF8EE] '>
      <div className='container py-6 mx-auto flex items-center '>
        <div className='flex-1'>
          <div>
            <h1 className='font-bold text-6xl'>{hero.title}</h1>
          </div>
          <p className='py-10'>{hero.subtext}</p>
          <div className='space-x-10'>
            <button className='bg-[#c72825] py-2.5 px-6 rounded-xl'>
                <div className='flex items-center space-x-2'>
                  <FaGooglePlay style={{color:"white"}}/>
                    <p className='flex flex-col text-white pr-6'>
                      <small className='text-xs'>Download on</small>
                      <small className='text-xs font-bold'>Google Play</small>
                    </p>
                    
                </div>
            </button>
            <button className='bg-[#c72825] py-2.5 px-6 rounded-xl'>
                <div className='flex items-center space-x-2'>
                  <FaApple style={{color:"white"}}/>
                    <p className='flex flex-col text-white pr-6'>
                      <small className='text-xs'>Download on the</small>
                      <small className='text-xs font-bold text-left'>App Store</small>
                    </p>
                    
                </div>
            </button>
          </div>
         
        </div>
        <div className='flex-1 items-center flex justify-center'>
          <img src={hero.Image} alt="" className=''/>
          </div>
      </div>
    </div>
  )
}

export default Hero