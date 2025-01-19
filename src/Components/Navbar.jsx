import React, { useRef } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaHeart, FaUser } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { RiTruckFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <>
      <header>
        <div>
          <p>
            <RiTruckFill className="icon" /> free Shipping on first time order
          </p>
        </div>
        <div>
          <p>
            <IoCall className="icon" />
            customer Care line
          </p>
          <span>|</span>
          <p>
            <CiLocationOn className="icon" /> Location (Google map){" "}
          </p>
        </div>
      </header>
      <nav>
        <div className="logo">
          <img src="images3e0269d05af853b79cb6e518c2a5c.png" alt="" />
        </div>

        <div className="drop-down" ref={navRef}>
          <button className="nav-btn nav-close-btn" onClick={showNav}>
            <FaTimes />
          </button>

          <div className="search">
            <form>
              <input type="text" />
              <button>Search</button>
            </form>
          </div>

          <div className="buttons">
            <div>
            <FaUser className="icon" />
            <FaHeart className="icon" />
            <Link to={"/cart"}>
              <FaShop className="icon" />
            </Link>
            </div>
          </div>
        </div>
        <button className="nav-btn" onClick={showNav}>
          <FaBars />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
