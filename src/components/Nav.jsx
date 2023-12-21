import { useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { shoppingBag } from "../assets/icons";

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
    sideBarMenuRight: -4000
  }
  const [hamburger,setHamburger] = useState(hamburgerCoordinates);

  return (
    <header className='padding-x py-8 fixed z-30 w-full bg-black border-b-red-200 border-b-2 '>
      <nav className='flex justify-between items-center max-container'>
        <Link onClick={() => {
          document.documentElement.scrollTop = '0'
          document.body.scrollTop = '0'
        }} to='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </Link>
        <ul style={{right:`${hamburger.sideBarMenuRight}px`}} className={`flex-1 flex justify-center items-center gap-16 z-20
          max-lg:flex-col max-lg:absolute max-lg:top-0 max-lg:transition-all  max-lg:duration-500 max-lg:min-h-screen max-lg:w-[300px] max-lg:bg-coral-red
        `}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
                onClick={() => {
                  setHamburger({...hamburgerCoordinates, sideBarMenuRight:-4000})
                }}
                href={'/' +item.href}
                className='font-montserrat hover:underline leading-normal text-lg text-slate-gray max-lg:font-bold max-lg:text-black  max-lg:text-2xl '
              >
                {item.label}
              </a>
            </li>
          ))}
          
        </ul>
        <div className="flex justify-center items-center gap-6">
          <Link to='/shopping-bag' className="relative z-10 flex justify-center items-center">
            <img width={36} src={shoppingBag}/>
            <span className="text-white absolute top-4 text-[12px]">1</span>
          </Link>
          <button onClick={(e) => {
            e.preventDefault();
            hamburgerCoordinates.first.deg === hamburger.first.deg ? 
            setHamburger({
              first:{
                top:16,
                deg:45
              },
              second:500,
              third:{
                top:8,
                deg:45
              },
              sideBarMenuRight: 0
            }) : setHamburger(hamburgerCoordinates)
          }} className='hidden z-20   max-lg:flex max-lg:flex-col max-lg:gap-2 max-lg:cursor-pointer'>
            <span style={{top:`${hamburger.first.top}px`, rotate:`${hamburger.first.deg}deg`}} className={`block relative   w-7 h-1 bg-white  duration-500  transition-all`}></span>
            <span style={{left:`${hamburger.second}px`}}  className={`block relative  top-0   transition-all w-7 h-1 bg-white duration-500`} ></span>
            <span style={{top:`-${hamburger.third.top}px`, rotate:`-${hamburger.third.deg}deg`}} className={`block relative   w-7 h-1  bg-white duration-500  transition-all`}></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
