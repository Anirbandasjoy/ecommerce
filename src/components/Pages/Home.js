import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import ProductList from '../ProductCard'
import Slider from '../Slider'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
    <ProductList />
    <Footer />
      
    </div>
  )
}

export default Home