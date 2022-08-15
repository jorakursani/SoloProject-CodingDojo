import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="top">
        <div className="title">
          <img src="../pics/ecommerce.png" alt="logo" />
          <h1>E-commerce</h1>
        </div>
        <input id="search" placeholder="Search for anything" type="text" />
        <div className="sign-in">
          <h3>Sign in</h3>
          <img src="../pics/shopping-cart-icon.png" alt="cart" />
        </div>
      </div>
      <div className="bottom">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/new">
          Add a New Product
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
