import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import BigDIscount from "./BigDIscount";

const Product = () => {
  return (
    <section className="products">
      <div className="product-container">
        <h1>Popular Products</h1>

        <div className="section">
            <div className="title">
            <h2>All Apple Poducts </h2>
            </div>
            <div className="products-grid">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />

              
            </div>
            <div className="link">
                <Link to={'/Products'}>view all products</Link>
            </div>
        </div>
        <div className="section">
            <div className="title">
            <h2>All Samsung Poducts </h2>
            </div>
            <div className="products-grid">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />

              
            </div>
            <div className="link">
                <Link to={'/Products'}>view all products</Link>
            </div>
        </div>
        <div className="section">
            <div className="title">
            <h2>games and accesories </h2>
            </div>
            <div className="products-grid">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />

              
            </div>
            <div className="link">
                <Link to={'/Products'}>view all products</Link>
            </div>
          <BigDIscount />
        </div>

        

      </div>
    </section>
  );
};

export default Product;
