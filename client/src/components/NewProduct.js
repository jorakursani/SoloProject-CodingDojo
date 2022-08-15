import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./NewProduct.css";
const NewProduct = () => {
  const [boxArt, setBoxArt] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState("");
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        boxArt,
        name,
        description,
        status,
        price,
        quantity,
        review,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.response.data.err.errors);
        console.log(err.response.data.err.errors);
      });
  };

  return (
    <div className="card">
      <form className="card-form" onSubmit={handleSubmit}>
        <label>Box Art: </label>
        <input
          type="text"
          value={boxArt}
          onChange={(e) => setBoxArt(e.target.value)}
        />
        {errors.boxArt && (
          <span className="text-danger">{errors.boxArt.message}</span>
        )}
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && (
          <span className="text-danger">{errors.name.message}</span>
        )}
        <label>Description: </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && (
          <span className="text-danger">{errors.description.message}</span>
        )}
        <label>Status: </label>
        <select
          value={status}
          name="status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Select status: </option>
          <option value="In stock">In stock</option>
          <option value="Out of stock">Out of stock</option>
        </select>
        {errors.status && (
          <span className="text-danger">{errors.status.message}</span>
        )}
        <label>Price: </label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {errors.price && (
          <span className="text-danger">{errors.price.message}</span>
        )}
        <label>Quantity: </label>
        <select
          value={quantity}
          name="quantity"
          onChange={(e) => setQuantity(e.target.value)}
        >
          <option>Select quantity: </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        {errors.quantity && (
          <span className="text-danger">{errors.quantity.message}</span>
        )}
        <label>Review: </label>
        <input
          type="text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        {errors.review && (
          <span className="text-danger">{errors.review.message}</span>
        )}

        <button>Add Product</button>
      </form>
    </div>
  );
};

export default NewProduct;
