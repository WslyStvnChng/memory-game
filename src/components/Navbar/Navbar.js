import React from "react";
import "./Navbar.css";

const that = {
  primary: {
    color: "#2c323c",
    textShadow: "1px 1px 4px white",
    fontSize: "9.0rem",
    fontWeight: "bold",

  }
};
const Navbar = props => (
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="title">
        <h1 style={that.primary}>Memory Game!{props.children}</h1>
        <h2>
          Score: {props.curScore}
          Highscore: {props.topScore}
        </h2>
      </div>
    </div>
  </div>
);

export default Navbar;


