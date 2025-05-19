import React from 'react'
import Nav from '../Nav'
import { CartProvider,useCart } from 'react-use-cart';
import Nav_cart from '../Nav_cart';
import Footer from '../Footer';




function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return (
       <div className="container">
      <div className="row mt-5 cart_empty">
        <div className='col-md-12'>
      <p>Your cart is empty</p>
        </div>
        <div className='col-md-12'> 
     <img src='img\81c4fc9a4c06cf57abf23606689f7426.jpg'></img>
        </div>
    </div>
   </div> )
   ;

  return (
    <div className="container-fluid">
    <div className="row mt-5">
        <div className='col-md-12 mt-5 Cart_title'>
      <h1 className="text-center">your Cart ({totalUniqueItems})_____
              <button className="btn btn-danger" onClick={()=>emptyCart()}>Delet All</button>
      </h1>
      </div>
    <div className="container ">
      <div class="row">  
            {items.map((items) => (
          <div key={items.id} className=" col-md-4 api_table">
                <div>
                 <img src={items.image}></img>

                  </div>
                  <div className="api_table_articl">
             <h5 className="Hotel_darck_h4_1">{items.name}</h5>
              <h6 className="Hotel_darck_h4_1">price: {items.price*items.quantity}$</h6>
             <h6 className="Hotel_darck_h4_1">days: {items.quantity}</h6>

            <span>decress day :</span>
            <button className="api_table_buttun_1"
              onClick={() => updateItemQuantity(items.id, (items.quantity ?? 0) - 1)}
            >
            -
            </button>
            <br/>
            <span>anther day :</span>
            <button className="api_table_buttun_1"
              onClick={() => updateItemQuantity(items.id, (items.quantity ?? 0) + 1)}
            >
              +
            </button>
            <br/>

            <button className="api_table_buttun_3" onClick={() => removeItem(items.id)}>cancel</button>
          </div>
          </div>
        ))}
      </div>
    </div>
              </div>
            </div>

  );
}
function AllCart() {
  return (
    <CartProvider>
        <Nav_cart/>
        <Cart/>
        <Footer/>
    </CartProvider>
  )
}

export default AllCart