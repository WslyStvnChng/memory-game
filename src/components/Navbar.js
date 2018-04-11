import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = () => (
  <div>
    <nav className="navbar navbar-dark bg-dark">
    <ul>
      <li class="brand">
        <a href="/">Memory Game</a>
      </li>
      <li class>Click an image to begin</li>
      <li>Score: | TopScore: </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
