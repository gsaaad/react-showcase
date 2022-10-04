import React from "react";
import BgFlipper from "../BG_simple-Flipper/BG_Flipper";
import Counter from "../Counter/Counter";
import ReviewCarousel from "../ReviewCarousel/ReviewCarousel";
import Faq from "../FAQ/FAQ";
import TicTacToe from "../TicTacToe/TicTacToe";
import FlightAway from "../Flight-Away/FlightAway";
const ComponentsChest = () => {
  return (
    <div className="components-container grid bg-black p-4 rounded-l">
      <div className="grid grid-rows-1 space-y-2 m-2">
        <BgFlipper />
        <Counter />
        <ReviewCarousel />
        <Faq />
        <TicTacToe />
        <FlightAway />
      </div>
    </div>
  );
};

export default ComponentsChest;
