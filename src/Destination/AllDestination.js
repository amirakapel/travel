import React, { Component } from 'react'
import Offiress from './Offiress'
import { CartProvider } from 'react-use-cart'
import Nav_cart from '../Nav_cart'
import Footer from '../Footer'

export class AllDestination extends Component {
  render() {
    return (
      <CartProvider>
        <Nav_cart/>
        <Offiress/>
        <Footer/>
      </CartProvider>
    )
  }
}

export default AllDestination