import React from 'react'
import { Link } from 'react-router-dom'

const Total = () => {
  return (
    <section className="total-card">
      <div className="total-grid">
        <div>
          <h1>Cart Total</h1>
          <p>SubTotal</p>
        </div>
        <div className='middle'>
          #2, 000 000
        </div>
        <div>
          <h3>Total</h3>
          <h2># <span>2,000,000</span></h2>
          <Link to={'/payment'}><button>Proceed To Checkout</button></Link>
        </div>
      </div>
    </section>
  )
}

export default Total