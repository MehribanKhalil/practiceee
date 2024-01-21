import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'



const MobileNav = ({isOpen}) => {


  const [isScroll, setIsScroll] = useState(false)

  const nav=()=>{
    const scroll= window.scrollY;
    scroll > 100 ? setIsScroll(true) : setIsScroll(false)
  }

  useEffect(() => {
    window.addEventListener('scroll',nav)
  }, [])

  return (
    <nav className={` ${isOpen ? ' h-[300px] z-30 ' : ''}  ${isScroll ? 'fixed top-16' : " absolute top-16 left-0"} h-0 duration-300 overflow-hidden   w-full bg-[#4C4C4C] `}>
        <div className="flex flex-col  gap-4 p-5 ">
        <NavLink className='nav-item' to={"/"}>Home</NavLink>
        <NavLink className='nav-item' to={"/cakes"}>Cakes</NavLink>
        <NavLink className='nav-item' to={"/about"}>About</NavLink>
        <NavLink className='nav-item' to={"/admin"}>Admin</NavLink>
        <NavLink className='nav-item' to={"/wishlist"}> Wishlist</NavLink>

        <NavLink className='nav-item' to={"/basket"}>Basket</NavLink>
      </div>
    </nav>
  )
}

export default MobileNav