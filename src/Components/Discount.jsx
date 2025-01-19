import React from "react";
import { Link } from "react-router-dom";

const Discount = () => {
  return (
    <section className="discount">
      <div className="discount-grid">
        <div className="right">
          <div className="discount-container">
            <h4>Hurry Up!</h4>
            <h1>Up to 10% Discount</h1>

            <div className="time">
              <div className="days">
                <span>20</span> DAYS{" "}
              </div>
              <div className="days">
                <span>20</span> HOURS{" "}
              </div>
              <div className="days">
                <span>20</span> MINS{" "}
              </div>
              <div className="days">
                <span>20</span> SECS{" "}
              </div>
            </div>
            <Link to={"/products"}>
              <button>Shop Now</button>
            </Link>
          </div>
        </div>
        <div className="left">
          <img src="images/stacked phone.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Discount;
