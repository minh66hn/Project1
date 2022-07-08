import React from "react";
import "./Navbar.css";

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
            <link to="/cart">
                i
              {/*/ Icon */}
              Cart
              <span className="cartlogo_badge">0</span>
            </link>
          </li>
          <li>
            <link to="/">
              {/*/ Icon */}
              Shop
            </link>
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
