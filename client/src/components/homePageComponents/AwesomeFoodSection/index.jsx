import React from "react";
import './index.scss'


const AwesomeFoodSection = () => {
  return (
    <section id="sec" className=" section py-16" >
      <div className="section-heading text-center  max-w-[900px] mx-auto">
        <h2 className=" text-white text-2xl md:text-5xl pb-5">
          This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.
        </h2>
        <span className=" h-[2px] w-[100px] bg-main-color block  mx-auto"></span>
      </div>

      <div className=" flex-col xl:flex-row flex pt-16  gap-3">
        <div className=" w-full xl:w-1/2 text-white px-0 xl:px-10 space-y-6">
          <h3 className=" text-2xl text-main-color">
            This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.
          </h3>
          <p className=" font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercita tion ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit
            in voluptate velit esse cillum.
          </p>
          <p className=" font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercita tion ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit
            in voluptate velit esse cillum.
          </p>
        </div>

        <div className=" w-full xl:w-1/2">
            <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/about1.jpg" className=" w-full" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AwesomeFoodSection;
