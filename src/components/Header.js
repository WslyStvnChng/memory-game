import React from "react";
import "../styles/Header.css";


const that = {
  primary: {
    color: "white",
    fontSize: "7.0rem",
    fontWeight: "bold",
  },
  secondary: {
    color: "white",
    fontSize: "3.0rem",
    fontWeight: "bold"
  }
}

const Header = () => (
  <div>
  <header className="header">
    <h1 style = {that.primary} >Memory Game!</h1>
    <h2 style = {that.secondary} > Click on an image to earn points, but don't click on any more than once! </h2>
  </header>
  </div>
);

export default Header;