import React, { useContext } from 'react'
import { WishlistContext } from '../../../context/WishlistContext'
import { BasketContext } from '../../../context/BasketContext'
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const WishlistCard = ({image,title,price,product,_id,count}) => {
  const {deleteWishlist} = useContext(WishlistContext)
  const {addBasket} = useContext(BasketContext)

  return (
    <div className="group  text-white">
    <div className=" overflow-hidden relative ">
      <img
        src={image}
        className=" cursor-pointer hover:scale-105 duration-500 w-full"
        alt=""
      />

      <div className=" bg-main-color text-black flex justify-center py-4 absolute bottom-0 left-0 w-full  z-10 gap-5">
        <button onClick={()=>addBasket(product)}>
        <MdOutlineShoppingCart size={23} />
        </button>
        
        <button onClick={()=>deleteWishlist(_id)} >
        <IoHeartDislikeOutline size={23} />
        </button>
      </div>
    </div>

    <div className="py-3 space-y-2">
        <h3 className=" cursor-pointer text-2xl">{title}</h3>

      <p className="cursor-pointer text-main-color text-2xl font-light">
        Price: ${price}
        
      </p>

     

       
    </div>
  </div>
  )
}

export default WishlistCard