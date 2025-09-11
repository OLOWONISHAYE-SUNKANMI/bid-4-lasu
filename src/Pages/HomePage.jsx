import React from "react";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Latest from "../Components/Latest";
import Discount from "../Components/Discount";
import Product from "../Components/Product";
import Fetch from "../data/Fetch";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Latest />
      <Fetch />
      <Discount />
      <Product />
    </>
  );
};

export default HomePage;
