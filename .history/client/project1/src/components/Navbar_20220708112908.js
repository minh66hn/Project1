import React from "react";
import "./Navbar.css";
import {Link}
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
            <Link>

            </Link>
          </li>
        </ul>
        {/*hamburger menu*/}
      </nav>
    </div>
  );
};

export default Navbar;
