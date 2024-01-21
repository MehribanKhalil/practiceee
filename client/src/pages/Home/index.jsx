import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../../components/homePageComponents/HeroSection'
import AwesomeFoodSection from '../../components/homePageComponents/AwesomeFoodSection'
import ProductSection from '../../components/homePageComponents/ProductsSection'
import Blogs from '../../components/homePageComponents/Blogs'
import Lovers from '../../components/homePageComponents/Lovers'
import FollowUs from '../../components/homePageComponents/FollowUs'

const Home = () => {
  return (
    <div>
        <Helmet>
        <title>Home</title>
      </Helmet>

      <HeroSection/>
      <AwesomeFoodSection/>
      <ProductSection/>
      <Lovers/>
      <Blogs/>
      <FollowUs/>
    </div>
  )
}

export default Home