import React from "react";
import { Route, Link } from "react-router-dom";
import Logo from "../../img/logo.png";

export default function NavBar() {
  return (
    <header className="header">
      <img src={Logo} alt="Img Logo" className="logo" />
      <h1>We Serve Soup</h1>
      <div className="navBox">
        <Link to="/login" className="links">
          Login
        </Link>
        <Link to="/registration" className="links">
          Register
        </Link>
      </div>
    </header>
  );
}
