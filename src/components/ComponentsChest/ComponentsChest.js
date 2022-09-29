import React, { useState } from "react";
import BgFlipper from "../BG_simple-Flipper/BG_Flipper";
import Counter from "../Counter/Counter";

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
    <div className="components-container grid bg-black">
      <div className="grid grid-rows-1">
        <BgFlipper />
        <Counter />
      </div>
    </div>
  );
};

export default ComponentsChest;
