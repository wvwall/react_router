import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="App">
      <h2>Tutorial_router</h2>
      <ul className="flex">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="Contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
