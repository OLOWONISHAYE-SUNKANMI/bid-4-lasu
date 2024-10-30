import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';

const Fetch = () => {
    

    const [data, setData] = useState([]);
    const baseURL = 'http://localhost:8000';
const cartURL = 'http://localhost:8000/cart'
const productURL = 'http://localhost:8000/products';


  return (
    <div>{data}</div>
  )
}

export default Fetch