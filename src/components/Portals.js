import React from "react";
import ReactDOM from "react-dom";

const Portals = () => {
  return ReactDOM.createPortal(
    <h1>Portal</h1>,
    document.getElementById("another-root")
  );
};

export default Portals;
