import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = (productId) => {
    axios
      .delete(`http://localhost:8000/api/products/${productId}`)
      .then((res) => {
        const newProducts = products.filter(
          (product) => product._id !== productId
        );
        setProducts(newProducts);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container1">
      {products.map((product) => (
        <div key={product._id} className="card1">
          <img src={product.boxArt} alt={product.description} />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>Review: {product.review}</p>
          <br />
          <Link to={`/product/${product._id}`}>Details</Link>
          <span> | </span>
          <Link to={`/product/edit/${product._id}`}>Edit</Link>
          <br />
          <button
            style={{ marginTop: "1rem", width: "100px" }}
            onClick={() => deleteProduct(product._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
