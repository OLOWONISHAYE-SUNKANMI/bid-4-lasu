import React from "react";
import { BiSupport } from "react-icons/bi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdBikeScooter } from "react-icons/md";

const PreFooter = () => {
  return (
    <section className="prefooter">
      <div className="prefooter-grid">
        <div className="pre-container">
          <div>
            <div className="icon">
              <LiaShippingFastSolid/>
            </div>
            <h2>24-Hours Delivery</h2>
            <p>Lorem, ipsum dolor sit <br /> amet consectetur adipisicing elit</p>
          </div>
        </div>
        <div className="pre-container">
          <div>
            <div className="icon">
             <IoShieldCheckmarkOutline/>
            </div>
            <h2>Secure Transaction</h2>
            <p>Lorem, ipsum dolor sit <br /> amet consectetur adipisicing elit</p>
          </div>
        </div>
        <div className="pre-container">
          <div>
            <div className="icon">
              <BiSupport/>
            </div>
            <h2>Reliable Customer Service</h2>
            <p>Lorem, ipsum dolor sit <br /> amet consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
