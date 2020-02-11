import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

export default function NavBar(props) {
  const logOut = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };

  return (
    <header className="header">
      {/* <img src={Logo} alt="Img Logo" className="logo" /> */}
      <h1 className="navTitle">
        <a href="/">We Serve Soup</a>
      </h1>
      <div className="navBox">
        {localStorage.getItem("token") ? (
          <>
            <Link to="/inventory" className="links">
              <button>Inventory</button>
            </Link>
            <Link to="/add-item" className="links">
              <button>Add Item</button>
            </Link>
            <Link to="/" className="links">
              <button onClick={logOut}>Log Out</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="links">
              <button>Log In</button>
            </Link>
            <Link to="/registration" className="links">
              <button>Register</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
