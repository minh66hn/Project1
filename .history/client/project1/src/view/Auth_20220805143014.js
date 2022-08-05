import React, { Component } from "react";
import "../App.css";
import LoginForm from "./LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
const Auth = () => {
    const {
      authState: {isAuthenticated },
    } = useContext(AuthContext);

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

export default Auth;
