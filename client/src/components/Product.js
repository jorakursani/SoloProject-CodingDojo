import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Product.css";
import { AiFillStar } from "react-icons/ai";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log("GET PRODUCT BY ID ERROR", err));
  }, [id]);

  const handleDeleteProduct = (productid) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((response) => {
        console.log("success deleting product");
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log("error deleting product", err.response);
      });
  };

  return (
    <>
      <div className="content">
        <div className="image">
          <img src={product.boxArt} alt={product.description} />
        </div>
        <div className="description">
          <p className="title">Name: </p>
          <p>{product.name}</p>
          <p className="title">Description:</p>
          <p>{product.description}</p>
          <p className="title">Reviews:</p>
          <p>{product.review}</p>
        </div>
        <div className="details">
          <table>
            <tr>
              <td>Status: {product.status}</td>
            </tr>
            <tr>
              <td>Price: ${product.price}</td>
            </tr>
            <tr>
              <td>Quantity: {product.quantity}</td>
            </tr>
          </table>
          <button>Add to cart</button>
          <button onClick={handleDeleteProduct}>Purchase item</button>
        </div>
      </div>
      <div className="reviews">
        <h2>Reviews</h2>
        <p>John Doe</p>
        <p>
          <AiFillStar /> <AiFillStar /> <AiFillStar />
        </p>
        <p>12/05/2022</p>
        <h2>Write a costumer review:</h2>
        <div className="form-review">
          <form className="review">
            <select name="stars">
              <option>Select stars: </option>
              <option>One star</option>
              <option>Two stars</option>
              <option>Three stars</option>
              <option>Four stars</option>
              <option>Five stars</option>
            </select>
            <textarea name="comment" cols="20" rows="3"></textarea>
          </form>
        </div>
      </div>
    </>
  );
};

export default Product;
