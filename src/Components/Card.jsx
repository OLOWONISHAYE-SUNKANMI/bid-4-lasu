import React from "react";
const Card = () => {
  return (
    <>
      <div className="card">
        <div>
          <img src="images/s23.png" alt="" />

          <p className="name">Samsung Galaxy S23 ultra</p>
          <p className="description">5G 12GB 256GB</p>

          <p className="price">$1,730,000.00</p>

          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Card;
