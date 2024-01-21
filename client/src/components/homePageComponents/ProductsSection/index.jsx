import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Loader from "../../commonComponents/Loader";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:8000/product");
    setProducts(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className=" section py-16">
      <div className="  text-white">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {isLoading ? (
            <Loader />
          ) : (
            products && products.map((product) => 
            <SwiperSlide key={product._id}>
              <ProductCard
                {...product}
                product={product}
              />
            </SwiperSlide>)
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSection;
