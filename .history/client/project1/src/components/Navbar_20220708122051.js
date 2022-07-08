import React from "react";
import "./Navbar.css";
import { Routes } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        {/*logo*/}
        <div className="navbar_logo">
          <h2>VanMing Sport Shopping </h2>
        </div>
        {/*links*/}
        <ul className="navbar_links">
          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              {/*/ Icon */}
              Cart
              <span className="cartlogo_badge">0</span>
            </Link>
          </li>
          <li>
            <Routes to="/">
              {/*/ Icon */}
              Shop
            </Routes>
          </li>
        </ul>
        {/*hamburger menu*/}
        <div className="hamburger_menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
