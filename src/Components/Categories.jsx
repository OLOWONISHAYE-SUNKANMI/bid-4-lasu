import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoIosLaptop } from "react-icons/io";
import { IoIosTabletPortrait } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="categories">
      <h1>Categories</h1>
      <div className="categories-icon">
        <div className="container">
          <div>
            <div className="icons">
              <IoPhonePortraitOutline className="icon" />
            </div>
            <p>Mobile Phones</p>
          </div>
        </div>
        <div className="container">
          <div>
            <div className="icons">
              <IoIosLaptop className="icon" />
            </div>
            <p>Laptops</p>
          </div>
        </div>
        <div className="container">
          <div>
            <div className="icons">
              <IoIosTabletPortrait className="icon" />
            </div>
            <p>Tablets</p>
          </div>
        </div>
        <div className="container">
          <div>
            <div className="icons">
              <IoGameControllerOutline className="icon" />
            </div>
            <p>Games Consoles</p>
          </div>
        </div>
        <div className="container">
          <div>
            <div className="icons">
              <FaHeadphones className="icon" />
            </div>
            <p>Accesories</p>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="category-card">
          <div>
            <h5>Level up your gaming experience with</h5>
            <p className="label">PlayStore 5 Console</p>
            <Link to={"/products"}>
              <button>Buy Now</button>
            </Link>

            <div className="image">
              <img src="images/ps5 coonsole.png" alt="" />
            </div>
          </div>
        </div>
        <div className="category-card">
          <div>
            <h5>Elevate your Photography and Videography skill with</h5>
            <p className="label">Canon EOS 5D</p>
            <Link to={"/products"}>
              <button>Buy Now</button>
            </Link>

            <div className="image">
              <img src="images/cannon.png" alt="" className="camera" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
