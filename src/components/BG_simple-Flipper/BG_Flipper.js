import React from "react";
import "./BG_Flipper.css";

const BgFlipper = () => {
  const handlebgflip = (e) => {
    e.preventDefault();
    const simpleColorArr = [
      "red",
      "green",
      "blue",
      "yellow",
      "pink",
      "white",
      "black",
      "purple",
      "brown",
      "firebrick",
      "orange",
      "orangered",
      "yellowgreen",
      "palegreen",
      "forestgreen",
      "crimson",
      "cyan",
      "salmon",
    ];
    const randomIndex = Math.floor(Math.random() * simpleColorArr.length);

    const randomColor = simpleColorArr[randomIndex];
    const bgContainer = document.getElementsByClassName("bg-container");
    const colorTitleContainer = document.getElementsByClassName("bg-title");
    bgContainer[0].setAttribute("style", `background-color:${randomColor} `);
    const colorTitle = randomColor[0].toUpperCase() + randomColor.slice(1);

    console.log((colorTitleContainer[0].innerHTML = `Color: ${colorTitle}`));
  };
  return (
    <div className="bg-container">
      <h1 className="bg-title">Color: Red</h1>
      <button className="bg-btn" onClick={handlebgflip}>
        Click for a New simple Color
      </button>
    </div>
  );
};

export default BgFlipper;
