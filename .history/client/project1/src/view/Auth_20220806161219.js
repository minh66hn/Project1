import React, { Component, useContext } from "react";
import "../App.css";
import LoginForm from "./LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./AuthContext";
const Auth = () => {
  const {
    authState: { isAuthenticated ,setSta},
  } = useContext(AuthContext);
if (isAuthenticated & setSta===false) return <Redirect to="admin/dashboard" />;
  if (isAuthenticated && setSta===true) return <Redirect to="admin) return <Redirect to="admin/addproducts" />;
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
