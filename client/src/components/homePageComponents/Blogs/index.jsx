import React from 'react'

const Blogs = () => {
  return (
    <section className='pb-16 '>
            <div className=' section flex justify-between py-24'>
                <h3 className=' text-[#DFDFDF] text-5xl'>Our Blogs</h3>
                <button className=' btn'>MORE BLOG</button>
            </div>

            <div className=' flex-col lg:flex-row flex gap-5 '>
                <div className=' text-white flex flex-col sm:flex-row  '>
                    <div className='  w-full sm:w-1/2'>
                        <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/blog1.jpg" alt=""
                        className='w-full h-full object-cover' />
                    </div>

                    <div className='w-full sm:w-1/2 border border-gray-700 p-7 space-y-4'>
                        <h4 className=' cursor-pointer text-main-color text-2xl'>Tomato, black olive, feta & anchovy tart ulla mco laboris</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</p>
                        <div>
                        <p className=' cursor-pointer text-main-color uppercase'>LEARN MORE</p>
                        {/* <span  className=' h-[2px] w-full bg-main-color inline-block'></span> */}
                        </div>
                    </div>
                </div>

                <div className=' text-white flex  flex-col sm:flex-row'>
                    <div className=' w-full sm:w-1/2'>
                        <img src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/blog2.jpg" alt="" className=' w-full h-full object-cover' />
                    </div>

                    <div className='w-full sm:w-1/2 border border-gray-700 p-7 space-y-4'>
                        <h4 className=' cursor-pointer text-main-color text-2xl'>Tomato, black olive, feta & anchovy tart ulla mco laboris</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</p>
                        <div>
                        <p className=' cursor-pointer text-main-color uppercase'>LEARN MORE</p>
                        {/* <span  className=' h-[2px] w-full bg-main-color inline-block'></span> */}
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Blogs