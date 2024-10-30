import React from 'react'
import CartCard from '../Components/CartCard'
import Route from '../Components/Route'
import Total from '../Components/Total'
import PromoCode from '../Components/PromoCode'

const CartPage = () => {
  return (
    <div className='cartPage'>
  <div className="route"><Route isCart = {true} /></div>
    <div className="content">
      <div className='content-container'>

      <h1>Your Shopping Cart Summary</h1>
      <hr />
      <div className="container">
      <CartCard className="cart-card"/>
      <CartCard className="cart-card"/>
      <CartCard className="cart-card"/>
      </div>  

      <PromoCode/>
      <Total/>

      </div>

      

    </div>
  
    </div>
  )
}

export default CartPage