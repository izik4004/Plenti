import React from 'react';
import { nav } from "../data"


const Nav = () => {
  const { navItems } = nav;
  return <nav>
    <ul className='flex space-x-6'>
      {navItems.map((item, index) => {
        const { href, name } = item;
        return <li key={index}>
          <a className='hover:text-accent transition' href={href}>{name}</a>
        </li>
      })}
    </ul>
  </nav>;
};
export default Nav;