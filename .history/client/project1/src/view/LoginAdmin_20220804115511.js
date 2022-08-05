import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./LoginForm";


const LoginAdmin = () => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>VanMingShop</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
