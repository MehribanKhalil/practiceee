import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";


const Footer = () => {
  return (
    <footer className=" section py-10 text-white">
      <div className=" footer-top  border-t border-b border-gray-700 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
        <div className=" col-span-2 space-y-8">
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita
            tion ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className=" flex gap-2">
            <button className=" hover:border-main-color hover:text-main-color duration-500 flex  items-center gap-2 border px-5 py-2 border-gray-700">
              <FaInstagram />
              Instagram
            </button>

            <button className="hover:border-main-color hover:text-main-color duration-500 flex  items-center gap-2 border px-5 py-2 border-gray-700">
              <FaFacebookF />
              Facebook
            </button>

            <button className="hover:border-main-color hover:text-main-color duration-500 flex  items-center gap-2 border px-5 py-2 border-gray-700">
              <FaXTwitter />
              Twitter
            </button>
          </div>
        </div>

        <div className="  space-y-4">
          <span>
            <FaLocationArrow size={24} />
          </span>
          <h3 className=" text-2xl text-main-color cursor-pointer">Location</h3>
          <p>4736 Poe Lane, HOT SPRINGS, Montana-59845</p>
        </div>

        <div className="  space-y-4">
          <span>
            <FaPhoneAlt size={24} />
          </span>
          <h3 className=" text-2xl text-main-color cursor-pointer">Contact</h3>
          <p>913-473-7000 contact@cakeshop.com</p>
        </div>
      </div>

      <div className=" pt-9">
        <p className="flex items-center justify-center gap-1 ">Copyright ©2024 All rights reserved | This template is made with by <GoHeartFill /> Mehi</p>
      </div>
    </footer>
  );
};

export default Footer;
