import React, { useContext } from 'react'
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { Link } from 'react-router-dom';
import { BasketContext } from '../../../context/BasketContext';
import { WishlistContext } from '../../../context/WishlistContext';

const BasketCard = ({image,title,price,product,_id,count}) => {
  const {deleteBasket,incCount,decCount} = useContext(BasketContext)
  const { addWishlist } = useContext(WishlistContext);

  return (
    <div className="group  text-white">
    <div className=" overflow-hidden relative ">
      <img
        src={image}
        className=" cursor-pointer hover:scale-105 duration-500 w-full"
        alt=""
      />

      <div className=" bg-main-color text-black flex justify-center py-4 absolute bottom-0 left-0 w-full  z-10 gap-5">
        <button onClick={()=>deleteBasket(_id)}>
        <MdOutlineRemoveShoppingCart size={23} />
        </button>

        <button onClick={()=>addWishlist(_id)}>
        <GoHeart size={23} />
        </button>
      </div>
    </div>

    <div className="py-3 space-y-2">
      <Link>
        <h3 className=" cursor-pointer text-2xl">{title}</h3>
      </Link>

      <p className="cursor-pointer text-main-color text-2xl font-light">
        Price: ${price}
        
      </p>

      <p className="cursor-pointer text-main-color text-2xl font-light">
        Total: ${price*count}
        
      </p>

        <div className=' flex justify-center items-center gap-5 pt-3'>
            <button onClick={()=>decCount(product)} className=' border border-main-color w-8 h-8 flex justify-center items-center text-4xl'>-</button>
            <span className=' text-2xl'>{count}</span>
            <button onClick={()=>incCount(product)} className='border border-main-color w-8 h-8 flex justify-center items-center text-2xl'>+</button>

        </div>
    </div>
  </div>
  )
}

export default BasketCard