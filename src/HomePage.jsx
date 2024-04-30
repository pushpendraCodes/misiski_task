import React from 'react'
import Navbar from './component/Navbar'
import BreadCrumbs from './component/BreadCrumbs'
import Products from './component/Products'
import Explore from './component/Explore'
import { faqData, imageData } from './util/menu'
import FAQ from './component/Faq'
import Banner from './component/Banner'
import Footer from './component/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <BreadCrumbs/>
      <Products/>
      <Explore  images={imageData}  />
      <FAQ data={faqData} />
      <Banner/>
      <Footer/>
    </div>
  )
}

export default HomePage
