import React, { useState } from "react";

const Tour = (prop) => {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <div className="card">
      <img src={prop.image} alt="img" />
      <footer>
        <div className="info">
          <h1>{prop.name}</h1>
          <p className="price">${prop.price}</p>
        </div>
        <p className="description">
          {isReadMore ? prop.info : `${prop.info.substring(0, 200)}...   `}
          <button
            className="read-more-btn"
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <div className="btn-wrap">
          <button onClick={() => prop.onClick()}>Not Interested</button>
        </div>
      </footer>
    </div>
  );
};

export default Tour;
