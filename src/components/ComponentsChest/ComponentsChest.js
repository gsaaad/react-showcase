import React, { useState } from "react";
import BgFlipper from "../BG_simple-Flipper/BG_Flipper";
import Counter from "../Counter/Counter";
import ReviewCarousel from "../ReviewCarousel/ReviewCarousel";
const ComponentsChest = () => {
  return (
    <div className="components-container grid bg-black">
      <div className="grid grid-rows-1 space-y-2">
        <BgFlipper />
        <Counter />
        <ReviewCarousel />
      </div>
    </div>
  );
};

export default ComponentsChest;
