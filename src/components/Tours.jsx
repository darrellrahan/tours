import React from "react";
import Tour from "./Tour";

const Tours = (prop) => {
  return (
    <div>
      <h1 className="title">Tours</h1>
      {prop.data.map((tour, index) => {
        const { image, name, price, info } = tour;
        return (
          <Tour
            key={index}
            rmIndex={index}
            image={image}
            name={name}
            price={price}
            info={info}
            onClick={() => prop.onClick(index)}
          />
        );
      })}
    </div>
  );
};

export default Tours;
