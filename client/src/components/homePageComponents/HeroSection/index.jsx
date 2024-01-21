import React from 'react'
import './index.scss'
const HeroSection = () => {
  return (
    <section className='section hero-section flex  items-center'>
      <div className=' max-w-[500px] text-white space-y-5'>
        <h1>
          Healty Made Delicious Cake
        </h1>

        <div>
          <button className='btn'> order now</button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection