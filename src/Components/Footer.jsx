import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-grid">
        <div className="contact">
          <h2>Contact Us</h2>
          <img src="https://res.cloudinary.com/depeqzb6z/image/upload/v1757378556/IB-removebg-preview_e934kh.png" alt="" />
          <div className="info">
            <span>
              {" "}
              <FaLocationDot />{" "}
            </span>
            <p>
              {" "}
              <FaLocationDot className="icon" />
              Lagos State University <br />
              Ojo, Lagos State.
            </p>
          </div>
          <div className="info">
            <span>
              {" "}
              <FaPhoneAlt />{" "}
            </span>
            <p>
              {" "}
              <FaPhoneAlt className="icon" />
              (+234) 704 234 8901
            </p>
          </div>
          <div className="info">
            <span>
              {" "}
              <SiGmail className="icon" />{" "}
            </span>
            <p>
              {" "}
              <SiGmail className="icon" />
              info@bid4lasu.com.ng
            </p>
          </div>
        </div>
        <div className="pages">
          <h1>Pages</h1>
          <div>
            <Link>Home</Link>
          </div>
          <div>
            <Link>About</Link>
          </div>
          <div>
            <Link to={"/Products"}>Product</Link>
          </div>
          <div>
            <Link>Contact</Link>
          </div>
          <div>
            <Link>Log in</Link>
          </div>
          <div>
            <Link to={"/cart"}>cart</Link>
          </div>
          <div>
            <Link>Favourite</Link>
          </div>
        </div>
        <div className="download">
          <h1>Download Our App</h1>
          <p>
            Download our App and stand a chance to get <br />a discount on your
            first order...!
          </p>
          <div className="pics">
            <img src="images/applestore.png" className="apple" />
            <img src="images/googleplay.png" className="googleplay" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
