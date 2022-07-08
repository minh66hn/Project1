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
            <link to="/cart">{/*/ Icon */}
            </link>
          </li>
        </ul>
        {/*hamburger menu*/}
      </nav>
    </div>
  );
};

export default Navbar;
