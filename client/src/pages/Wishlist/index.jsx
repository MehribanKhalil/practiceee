import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../context/WishlistContext'
import WishlistCard from './WishlistCard'

const Wishlist = () => {
  const {wishlist} = useContext(WishlistContext)

  return (
    <div className=' page section py-16'>
        <Helmet>
        <title>Wishlist</title>
      </Helmet>

      <h2 className='  text-4xl  text-white pb-16 text-center text'>Wishlist Products</h2>
      
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {
          wishlist.length===0 ? <p className=' text-3xl  text-white'>Wishlist is empty :/ </p> :
          wishlist && wishlist.map(product=>(
           <div key={product._id}>
             <WishlistCard
             product={product}
            {...product}
            />
           </div>
          ))
        }
      </div>
    </div>
  )
}

export default Wishlist