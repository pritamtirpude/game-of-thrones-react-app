import React from "react";
import "../components/card-list.scss";
import Card from "./Card";
import Loader from "./Loader";

const CardList = ({ gotData, isLoading }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <div className="cardslist-container">
      {gotData.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default CardList;
