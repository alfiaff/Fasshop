import React, {useState, useEffect} from 'react';
import {Outlet, Link, useLocation} from 'react-router-dom';
// Solid icon 
import {AiFillHome} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {BiSolidCategory} from 'react-icons/bi';
import {BsBagHeartFill} from 'react-icons/bs';
import {BsChatDotsFill} from 'react-icons/bs';

// regular icon 
import {AiOutlineHome} from 'react-icons/ai';
import {BiCategory} from 'react-icons/bi';
import {BsBagHeart} from 'react-icons/bs';
import {BsChatDots} from 'react-icons/bs';
import {BiSearchAlt} from 'react-icons/bi';

import logo from '../assets/logo.png';


const Header = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  
  
  return (
    <header 
      className={`w-full ${currentLocation === '/category' || currentLocation === '/wishlist' || currentLocation === '/message' || currentLocation === '/search' ? 'hidden xl:flex' : 'flex'} items-center justify-between  shadow px-5 xl:px-24 py-3 z-10 sticky top-0 bg-white`}
    >
      <a href="#" className="text-red-300">
        <img  src={logo} alt="Fashhop logo" className="w-14"/>
      </a>
      <Link to={'/search'}>
        <BiSearchAlt className="text-3xl"/>
      </Link>
        <nav className="w-full xl:w-fit bg-white fixed xl:static bottom-0 left-0 p-5 shadow-[0_0_3px_rgba(0,0,0,.3)] xl:shadow-none rounded-t-3xl xl: rounded-none">
        <ul className="flex items-center justify-between gap-5">
          <li>
            <Link to={'/'} className="flex flex-col items-center justify-center gap-1">
              {
                currentLocation === '/' ? <AiFillHome className="text-2xl" /> : <AiOutlineHome className="text-2xl"/>
              }
              <span className="text-sm xl:hidden">Home</span>
            </Link>
          </li>
          <li >
            <Link to={'/category'} className="flex flex-col items-center justify-center gap-1">
              {
                currentLocation === '/category' ? <BiSolidCategory  className="text-2xl"/> : <BiCategory  className="text-2xl"/>
              }
              <span className="text-sm xl:hidden">Category</span>
            </Link>
          </li>
          <li  >
             <Link to={'/wishlist'} className="flex flex-col items-center justify-center gap-1">
                {
                  currentLocation === '/wishlist' ? <BsBagHeartFill  className="text-2xl"/> : <BsBagHeart  className="text-2xl"/>
                }
                <span className="text-sm xl:hidden mt-1">Wishlist</span>
             </Link>
          </li>
          <li  >
             <Link to={'/message'} className="flex flex-col items-center justify-center gap-1">
                {
                  currentLocation === '/message' ? <BsChatDotsFill  className="text-2xl"/> : <BsChatDots  className="text-2xl"/>
                }
              <span className="text-sm xl:hidden mt-1">Message</span>
             </Link>
          </li>
          <li>
            <Link to="/profile" className="flex flex-col items-center justify-center">
              <BiUserCircle className="text-3xl"/>
            </Link>
          </li>
        </ul>
        <Outlet />
      </nav>
    </header>
  );
}

export default Header;