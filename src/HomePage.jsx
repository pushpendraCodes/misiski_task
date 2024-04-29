import React from 'react'
import Navbar from './component/Navbar'
import BreadCrumbs from './component/BreadCrumbs'
import Products from './component/Products'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <BreadCrumbs/>
      <Products/>
    </div>
  )
}

export default HomePage
