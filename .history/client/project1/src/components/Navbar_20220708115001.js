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
          <>
            <link to="/cart">
                
            </link>
          </li>
        </ul>
        {/*hamburger menu*/}
      </nav>
    </div>
  );
};

export default Navbar;
