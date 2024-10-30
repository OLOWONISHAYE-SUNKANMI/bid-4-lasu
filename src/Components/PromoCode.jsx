import React from 'react'
import { GiPriceTag } from 'react-icons/gi'

const PromoCode = () => {
  return (
    <section className="promo">
        <div className="writing">
            <div className="tag">
                <GiPriceTag />
            </div>
            <div className="write">
                <h3>Discount/Promo Code</h3>
                <p>Don't have any yet? Check out our discount program</p>
            </div>

        </div>
        <form >
            <input type="text" placeholder='Enter Coupon code'/>
            <button>APPLY</button>
        </form>
    </section>
  )
}

export default PromoCode