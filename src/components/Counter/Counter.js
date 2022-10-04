import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [componentStyle, setComponentStyle] = useState({
    display: "none",
    backgroundColor: "black",
  });
  let [counterValue, setCounterValue] = useState(-1000);
  const handleShowComponent = (e) => {
    e.preventDefault();

    if (componentStyle.display === "none") {
      setComponentStyle({ display: "block" });
    } else {
      setComponentStyle({ display: "none" });
    }
  };
  const handlePlus = (e) => {
    e.preventDefault();
    setCounterValue((counterValue += 1));
  };
  const handleMinus = (e) => {
    e.preventDefault();
    setCounterValue((counterValue -= 1));
  };
  const handleReset = (e) => {
    e.preventDefault();
    setCounterValue((counterValue = 0));
  };
  return (
    <div className="bg-amber-800 rounded-xl">
      <button className="bg-btn" onClick={handleShowComponent}>
        Display Counter Pro +
      </button>
      <div style={componentStyle}>
        <div className="grid grid-cols-1 bg-amber-600 ">
          <div className="flex flex-row p-4 bg-amber-700 space-x-3">
            <button
              className="counter basis-1/4 bg-amber-300"
              onClick={handleMinus}
            >
              -
            </button>
            <h1 className="counter basis-1/2 bg-amber-500 min-w-max">
              {counterValue}
            </h1>
            <button
              className="counter basis-1/4 bg-amber-300 "
              onClick={handlePlus}
            >
              +
            </button>
          </div>
          <div className="grid grid-cols-1 m-4">
            <button
              className="counter bg-amber-300 px-auto my-8 "
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
