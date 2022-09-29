import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [componentStyle, setComponentStyle] = useState({
    display: "none",
    backgroundColor: "black",
  });
  let [counterValue, setCounterValue] = useState(0);
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
    <div>
      <button className="bg-btn" onClick={handleShowComponent}>
        Display Counter Pro +
      </button>
      <div style={componentStyle}>
        <div className="grid grid-cols-1 bg-amber-600 ">
          <div className="grid grid-cols-3 p-8 bg-amber-700 space-x-3">
            <button className="counter bg-amber-300" onClick={handleMinus}>
              -
            </button>
            <h1 className="counter bg-amber-500">{counterValue}</h1>
            <button className="counter bg-amber-300" onClick={handlePlus}>
              +
            </button>
          </div>
          <div className="grid grid-cols-1 mx-auto">
            <button
              className="counter bg-amber-300 px-36 "
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
