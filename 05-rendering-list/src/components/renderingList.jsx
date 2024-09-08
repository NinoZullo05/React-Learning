import React from "react";

const RenderingList = () => {
  const items = ["Apple", "Banana", "Orange", "Peach"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {index} {item}
        </li>
      ))}
    </ul>
  );
};

export default RenderingList;
