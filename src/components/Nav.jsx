import { useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {

  let hamburgerCoordinates = {
    first:{
      top:0,
      deg:0
    },
    second:0,
    third:{
      top:0,
      deg:0
    },
    sideBarMenuRight: 96
  }
  const [hamburger,setHamburger] = useState(hamburgerCoordinates);

  return (
    <header className='padding-x py-8 fixed z-20 w-full bg-black border-b-red-200 border-b-2 '>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className={`flex-1 flex justify-center items-center gap-16
          max-lg:flex-col max-lg:absolute max-lg:top-0 max-lg:transition-all  max-lg:duration-500 max-lg:min-h-screen max-lg:-right-${hamburger.sideBarMenuRight}  max-lg:w-[300px] max-lg:bg-coral-red
        `}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray max-lg:font-bold max-lg:text-black  max-lg:text-2xl '
              >
                {item.label}
              </a>
            </li>
          ))}
          
        </ul>
        
        <button onClick={(e) => {
          e.preventDefault();
          hamburgerCoordinates.first.deg === hamburger.first.deg ? 
          setHamburger({
            first:{
              top:4,
              deg:45
            },
            second:96,
            third:{
              top:2,
              deg:45
            },
            sideBarMenuRight: 0
          }) : setHamburger(hamburgerCoordinates)
        }} className='hidden   max-lg:flex max-lg:flex-col max-lg:gap-2 max-lg:cursor-pointer'>
          <span className={`block relative top-${hamburger.first.top}  w-7 h-1 bg-white rotate-${hamburger.first.deg} duration-500  transition-all`}></span>
          <span className={`block relative  top-0 left-${hamburger.second}  transition-all w-7 h-1 bg-white duration-500`} ></span>
          <span className={`block relative  -top-${hamburger.third.top} w-7 h-1 -rotate-${hamburger.third.deg} bg-white duration-500  transition-all`}></span>
        </button>
      </nav>
    </header>
  );
};

export default Nav;


<div className='flex gap-2 text-lg leading-normal max-lg:font-bold max-lg:flex-col max-lg:items-center max-lg:gap-6  max-lg:text-2xl font-medium font-montserrat  wide:mr-24'>
          <a className="text-slate-gray  max-lg:text-black" href='/'>Sign in</a>
          <span className="text-slate-gray max-lg:hidden">/</span>
          <a className="text-slate-gray  max-lg:text-black"  href='/'>Explore now</a>
        </div>