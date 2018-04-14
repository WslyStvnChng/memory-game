import React from "react";
import "./Navbar.css";

const Navbar = (props) => (
  <div className="header">
    <h1 className="title">Clicky Game</h1>
    <h2>Score: {props.newScore} TopScore: {props.topScore} </h2>
  </div>
);

export default Navbar;