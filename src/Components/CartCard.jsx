import React, { useState } from "react";

const CartCard = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="cart-card">
      <div className="card-grid">
        <div className="image">
          <img src="images/jbl clip 4.png" alt="JBL Clip 4" />
        </div>
        <div className="details">
          <div className="icon-data">
            <div>
              <p>Samsung Galaxy S23</p>
              <p>5G 256 GB</p>
            </div>

            <div>
              <div className="amount-big">
                <div className="arithmetic">
                  <span
                    onClick={() => {
                      setCount(count - 1);
                    }}
                    className="arith"
                  >
                    -
                  </span>
                  <span className="number">{count}</span>
                  <span
                    onClick={() => {
                      setCount(count + 1);
                    }}
                    className="arith"
                  >
                    +
                  </span>
                </div>
                <div className="price">#2,000,000</div>
              </div>
              <div className="amount-small">
                <div className="price">#2,000,000</div>
                <div className="arithmetic">
                  <span
                    onClick={() => {
                      setCount(count - 1);
                    }}
                    className="arith"
                  >
                    -
                  </span>
                  <span className="number">{count}</span>
                  <span
                    onClick={() => {
                      setCount(count + 1);
                    }}
                    className="arith"
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
