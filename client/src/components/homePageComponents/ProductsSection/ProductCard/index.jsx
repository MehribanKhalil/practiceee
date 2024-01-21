import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { BasketContext } from "../../../../context/BasketContext";
import { WishlistContext } from "../../../../context/WishlistContext";

const ProductCard = ({ image, title, price, product, _id }) => {
  const { addBasket } = useContext(BasketContext);
  const { wishlist, addWishlist } = useContext(WishlistContext);
  return (
    <div className="group">
      <div className=" overflow-hidden relative ">
        <img
          src={image}
          className=" cursor-pointer hover:scale-105 duration-500 w-full"
          alt=""
        />

        <div className=" bg-main-color text-black flex justify-center py-4 absolute group-hover:bottom-0   -bottom-24 duration-500 left-0 w-full  z-10 gap-5">
          <button onClick={() => addBasket(product)}>
            <AiOutlineShoppingCart size={23} />
          </button>

          <button onClick={() => addWishlist(product)}>
            {wishlist.some((item) => item._id === _id) ? (
              <GoHeartFill size={23} />
            ) : (
              <GoHeart size={23} />
            )}
          </button>
        </div>
      </div>

      <div className="py-3 space-y-2">
        <Link to={_id}>
          <h3 className=" cursor-pointer text-2xl">{title}</h3>
        </Link>

        <p className="cursor-pointer text-main-color text-2xl font-light">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
