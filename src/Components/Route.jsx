import React from "react";
import { Link } from "react-router-dom";

const Route = ({isCart}) => {
  console.log(isCart);

  return (
    <div className="route">
      <div>
        <Link to={"/"}>Home</Link> <Link to={"/products"}> > Products</Link>{" "}
        {isCart ?<Link> > Cart</Link> : <></>}
      </div>
    </div>
  );
};

export default Route;
