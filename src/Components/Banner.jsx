import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="Banner">
      <div className="grid">
        <div className="write-up">
          <div>
            <p className="save">SAVE UP TO 30% OFF</p>
            <h1>Appple Watches Series</h1>
            <p className="details">
              Explore all iWatch models and find the best ones for you
            </p>
            <Link to={"/products"}>
              <button> Shop Now </button>
            </Link>
          </div>
        </div>
        <div className="image">
          <img src="images/watches-circle.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
