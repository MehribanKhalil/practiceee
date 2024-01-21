import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import './index.scss'
import Hamburger from 'hamburger-react'
import MobileNav from "./MobileNav";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";


const Navbar = () => {


  const {basket}=useContext(BasketContext)
  const {wishlist} = useContext(WishlistContext)

  const location= useLocation()
  const [isOpen, setOpen] = useState(false)
  const [isScroll, setIsScroll] = useState(false)

  const nav=()=>{
    const scroll= window.scrollY;
    scroll > 100 ? setIsScroll(true) : setIsScroll(false)
  }

  useEffect(() => {
    window.addEventListener('scroll',nav)
  }, [])
  
  return (
    // ${location.pathname==='/' ? ' absolute gap-10 top-0 left-0 ' : 'bg-[#222] '}
    <nav className=" relative">
     <div className={` ${isScroll ? 'fixed z-30  bg-black  duration-300 '  : " duration-300   bg-[#4C4C4C] md:bg-transparent   " }   navbar section py-4 flex items-center justify-between w-full `}>
      <div >
        <NavLink to={'/'}>
          <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/logo/logo.png" className="w-[120px] md:w-[160px]" alt="" />
        </NavLink>
      </div>
      <div className="hidden md:flex  gap-10 ">
        <NavLink className='nav-item' to={"/"}>Home</NavLink>
        <NavLink className='nav-item' to={"/cakes"}>Cakes</NavLink>
        <NavLink className='nav-item' to={"/about"}>About</NavLink>
        <NavLink className='nav-item' to={"/admin"}>Admin</NavLink>
        <NavLink className='nav-item ' to={"/wishlist"}>
          <button  className="relative">
            <GoHeart size={22} />
            <span className=" absolute -top-2 -right-2 bg-red-600 w-4 h-4 flex justify-center items-center rounded-full  text-sm">
            {wishlist.length}
            </span>
          </button>
        </NavLink>

        <NavLink className='nav-item' to={"/basket"}>
          <button className=" relative">
            <AiOutlineShoppingCart  size={22} />
            <span className=" absolute -top-2 -right-2 bg-red-600 w-4 h-4 flex justify-center items-center rounded-full  text-sm">
            {basket.length}
            </span>
          </button>
        </NavLink>
      </div>

      <div className=" block md:hidden">
        <button className="rounded-xl px-2 bg-[#222222]  flex  items-center">
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </button>
      </div>
     </div>

     <MobileNav isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
