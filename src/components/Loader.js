import React from "react";
import loader from "../img/loader.svg";

const Loader = () => {
  return (
    <img
      src={loader}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="loader"
    />
  );
};

export default Loader;
