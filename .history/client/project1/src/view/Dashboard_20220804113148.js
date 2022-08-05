import React, { Component } from "react";
import Admin from "../components/auth/Admin";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "../components/Product";
const Dashboard = ({ authRoute }) => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>VanMingShop</h1>
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
