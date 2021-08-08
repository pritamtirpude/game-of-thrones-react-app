import React from "react";
import "../components/card.scss";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="character-image">
        <img src={data.imageUrl} alt={data.firstName} />
      </div>
      <h1>{data.fullName}</h1>
      <div className="info">
        <span>Title: {data.title}</span>
        <span>Family: {data.family}</span>
      </div>
    </div>
  );
};

export default Card;
