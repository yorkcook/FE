import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 style={{ color: "white" }}>Welcome!</h1>
      <h2 style={{ color: "white" }}>
        Please{" "}
        <Link to="/login" className="links">
          <button>Log In</button>
        </Link>{" "}
        or{" "}
        <Link to="/registration" className="links">
          <button>Register</button>
        </Link>
        to continue!
      </h2>
    </div>
  );
};

export default Home;
