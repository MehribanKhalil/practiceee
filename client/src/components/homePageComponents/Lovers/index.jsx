import React from "react";
import { FaStar } from "react-icons/fa";

const Lovers = () => {
  return (
    <section className=" section py-16">
      <h3 className=" text-4xl text-[#DFDFDF] text-center">Food Lover's Say</h3>

      <div className="  text-white py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div className=" p-10 border-t border-r border-b  border-l xl:border-l-0 space-y-6" >
        <div className=" flex text-yellow-600 gap-1">
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
        </div>

        <p className="  text-2xl font-light">
          "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore
          et dolore magna.
        </p>
        <div className=" flex gap-2 items-center"> 
          <div>
            <img
              src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/customer1.png"
              alt=""
            />
          </div>

          <h6>Wilma Mumduya</h6>
        </div>
        </div>

        <div className=" p-10 border space-y-6" >
        <div className=" flex text-yellow-600 gap-1">
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
        </div>

        <p className="  text-2xl font-light">
          "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore
          et dolore magna.
        </p>
        <div className=" flex gap-2 items-center"> 
          <div>
            <img
              src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/customer1.png"
              alt=""
            />
          </div>

          <h6>Wilma Mumduya</h6>
        </div>
        </div>

        <div className=" p-10 border-r border-l xl:border-l-0 xl:border-r-0 border-t   border-b  space-y-6" >
        <div className=" flex text-yellow-600 gap-1">
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
        </div>

        <p className="  text-2xl font-light">
          "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore
          et dolore magna.
        </p>
        <div className=" flex gap-2 items-center"> 
          <div>
            <img
              src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/customer1.png"
              alt=""
            />
          </div>

          <h6>Wilma Mumduya</h6>
        </div>
        </div>  
      </div>
    </section>
  );
};

export default Lovers;
