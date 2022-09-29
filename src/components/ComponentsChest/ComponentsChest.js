import React, { useState } from "react";
import BgFlipper from "../BG_simple-Flipper/BG_Flipper";
import Counter from "../Counter/Counter";

const ComponentsChest = () => {
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
