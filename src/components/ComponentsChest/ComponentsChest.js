import React, { useState } from "react";
import Header from "../Header/Header";
import BgFlipper from "../BG_simple-Flipper/BG_Flipper";

const ComponentsChest = () => {
  const [componentStyle, setComponentStyle] = useState({
    display: "none",
    backgroundColor: "black",
  });

  // const componentStyle = {
  //   display: "block",
  //   backgroundColor: "black",
  // };
  const handleShowComponent = (e) => {
    e.preventDefault();

    if (componentStyle.display === "none") {
      setComponentStyle({ display: "block", backgroundColor: "black" });
    } else {
      setComponentStyle({ display: "none", backgroundColor: "black" });
    }
  };

  return (
    <div className="components-container grid bg-rose-800">
      <div className="grid grid-rows-1">
        <div className="btn-component">
          <button className="bg-btn" onClick={handleShowComponent}>
            Display Background Color Flipper Pro+
          </button>
        </div>
        <div style={componentStyle}>
          <BgFlipper />
        </div>
      </div>
      <div>
        <div className="btn-component">
          <button className="bg-btn" onClick={handleShowComponent}>
            Display Counter Pro +
          </button>
        </div>
        <div style={componentStyle}>
          <BgFlipper />
        </div>
      </div>
    </div>
  );
};

export default ComponentsChest;
