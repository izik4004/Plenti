import React from 'react';
import { nav } from "../data"


const MobileNav = () => {
    const { navItems } = nav;
    return (
        <div className='bg-[#FFF8EE]  w-full h-full'>
            <ul className='h-full flex flex-col justify-center
    items-center gap-y-8'>
                {navItems.map((item, index) => {
                    const { href, name } = item
                    return <li key={index}>
                        <a className="link text-black font-bold text-2xl" href={href}>{name}</a>
                    </li>
                })}
            </ul></div>
    )
};
export default MobileNav;