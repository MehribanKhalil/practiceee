import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/commonComponents/Loader";
import axios from "axios";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BasketContext } from "../../context/BasketContext";

const Detail = () => {
  const {addBasket} = useContext(BasketContext)

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getProducts = async () => {
    const res = await axios.get(`http://localhost:8000/product/${id}`);
    setProducts(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className=" section py-16">
      <Helmet>
        <title>Detail</title>
      </Helmet>

      <div className=" flex  justify-center items-center">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="group  text-white">
            <div className=" overflow-hidden relative ">
              <img
                src={products.image}
                className=" cursor-pointer hover:scale-105 duration-500 w-full"
                alt=""
              />

              <div className=" bg-main-color text-black flex justify-center py-4 absolute bottom-0 left-0 w-full  z-10 gap-5">
              <button onClick={()=>addBasket(products)}>
                  <AiOutlineShoppingCart size={23} />
                  </button>

                  <button>
                  <GoHeart size={23} />
                  </button>
              </div>
            </div>

            <div className="py-3 space-y-2">
              <Link>
                <h3 className=" cursor-pointer text-2xl">{products.title}</h3>
              </Link>

              <p className="cursor-pointer text-main-color text-2xl font-light">
                Price: ${products.price}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
