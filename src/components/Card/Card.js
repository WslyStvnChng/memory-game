import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div>
      <img
        className="images"
        alt={props.name}
        src={props.image}
        onClick={() => props.randomImages()}
      />
    </div>
  );
};

export default Card;