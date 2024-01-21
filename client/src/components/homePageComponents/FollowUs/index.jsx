import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import './index.scss'

const FollowUs = () => {
  return (
    <section className=" section py-16">
      <h3 className=" text-4xl text-[#DFDFDF] text-center">
        Follow us on Instagram
      </h3>
      <div className=" flex justify-center py-5">
        <button className=" border-main-color text-main-color duration-500 flex  items-center gap-2 border px-5 py-2 ">
          <FaInstagram />
          Instagram
        </button>
      </div>

      <div className=" py-10">
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
            992: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
          <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra1.jpg" className="  w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
          <img className="  w-full" src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
          <img className="  w-full" src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
          <img className="  w-full" src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra4.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
          <img className="  w-full" src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra1.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FollowUs;
