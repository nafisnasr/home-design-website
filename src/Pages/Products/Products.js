import React from 'react'
import Navbar from "./../../Components/Navbar/Navbar"
import TitleBox from "./../../Components/TitleBox/TitleBox"
import AllProducts from '../../Components/AllProducts/AllProducts'
import Footer from '../../Components/Footer/Footer';
import "./Products.css"

export default function Products() {
  return (
    <div className='products'>
      <Navbar />
      <TitleBox titleMsg={" همه ی محصولات ما"}/>
      <AllProducts/>
      <Footer />
    </div>
  )
}
