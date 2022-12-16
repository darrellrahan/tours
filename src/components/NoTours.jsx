import React from "react";

const NoTours = (prop) => {
  return (
    <div>
      <h1>No Tours Left</h1>
      <button className="refresh-btn" onClick={prop.onClick}>
        Refresh
      </button>
    </div>
  );
};

export default NoTours;
