import React from 'react'
import Hreader from './Hreader'
import TRAVEL from './TRAVEL'
import Services from './Services'
import Destination from './Destination'
import About from './About'
import Place from './Place'
import Book from './Book'
import Hotel from './Hotel'
import Rooms from './Rooms'
import Resturant from './Resturant'
import Contact from './Contact'
import { CartProvider } from 'react-use-cart'
import ScrollToTop from 'react-scroll-to-top'
import Nav from '../Nav'
import Footer from '../Footer'

function AllHome() {
  return (
    <CartProvider>
      <Nav/>
        <Hreader/>
        <TRAVEL/>
        <Services/>
        <Destination/>
        <About/>
        <Place/>
        <Book/>
        <Hotel/>
        <Rooms/>
        <Resturant/>
        <Contact/>
        <Footer/>
       <ScrollToTop smooth 
       component="Top"
       style={{backgroundColor:"#d8aea8", color:"white" , boxShadow:"0px 6px 9px 1px #00000021"}}
       />
    </CartProvider>
  )
}

export default AllHome