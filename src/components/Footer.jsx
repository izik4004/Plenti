import React from 'react'
import { nav, SocialIcons } from '../data'
import Image from "../assets/plentilogo_white.png"

const Footer = () => {
    const {navItems} = nav
  return (
    <footer className='bg-[#211a33] text-white'>
    <div className='container mx-auto flex justify-between gap-10 p-10 flex-col lg:flex-row'>
        <div className='flex flex-col justify-between'>
            <div>
            <img src={Image} alt="" />
            <p className='py-6'>Shop, buy, make transaction and earn rewards</p>
            </div>
            
            <div>
                <h2 className='text-lg'>Social media</h2>
                <div className='flex space-x-4 py-6'>
                    {SocialIcons.map((item) => (
                        <img src={item} alt="" className='h-8 w-8'/>
                    ))}
                </div>
            </div>
        </div>
        <div className='flex flex-col'>
            <h2 className='text-2xl'>Company</h2>
            <ul className='flex flex-col py-6 '>
                {navItems.map((item, index) => {
                    const {href, name} = item;
                    return <li key={index} className="py-2 text-base">
                    <a className='hover:text-accent transition' href={href}>{name}</a>
                    </li>
                })}
    </ul>
        </div>
        <div className='flex flex-col'>
            <h2 className='text-2xl'>Contact</h2>
            <ul className='flex flex-col py-6'>
                <li>hello@plenti.africa</li>
                <li className='py-2'>+3333333</li>
            </ul>
        </div>
        <div className='flex flex-col'>
            <h2 className='text-2xl'>Location</h2>
            <p className='py-6'>24, Joel Ogunmaike street <br /> Ikeja GRA, Lagos Nigeria</p>
        </div>
    </div>

    <div className='border-t-2 border-[#B5AEC2]'>
    <div className='flex container mx-auto justify-between p-10 lg:flex-row flex-col space-y-4 '>
        <div className='flex space-x-10'>
            <p>Terms & conditions</p>
            <p>Privacy policy</p>
        </div>
        <div>
            <p><span className='text-[#B5AEC2]'>All Right Reserved by </span>Plenti Africa Limited</p>
        </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer