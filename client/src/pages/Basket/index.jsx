import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { BasketContext } from '../../context/BasketContext'
import BasketCard from './BasketCard'

const Basket = () => {
  const {basket} = useContext(BasketContext)

  const subtotal=basket.reduce((basketTotal,BasketItem)=>basketTotal+(BasketItem.count*BasketItem.price),0)
  return (
    <div className=' page section py-16'>
        <Helmet>
        <title>Basket</title>
      </Helmet>

      <h2 className='  text-4xl  text-white pb-16 text-center text'>Basket Products</h2>


    {
      basket.length===0 ? '' :
      <div className=' pb-16'>
      <p className=' text-white  text-4xl'>Subtotal: ${subtotal}</p>
    </div>
    }



      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {
          basket.length===0 ? <p className=' text-3xl  text-white'>Basket is empty :/</p> :
          basket && basket.map(product=>(
           <div key={product._id}>
             <BasketCard
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

export default Basket