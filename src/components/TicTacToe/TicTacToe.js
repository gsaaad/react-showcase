import React, { useState } from "react";

const TicTacToe = () => {
  const [componentStyle, setComponentStyle] = useState({
    display: "none",
  });
  const displayArray = ["x", "x", "x", "x", "x", "x", "x", "x", "x"];
  const handleShowComponent = (e) => {
    e.preventDefault();

    if (componentStyle.display === "none") {
      setComponentStyle({ display: "block" });
    } else {
      setComponentStyle({ display: "none" });
    }
  };

  const handleSymbol = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div className="bg-amber-800 rounded-xl">
      <button className="bg-btn" onClick={handleShowComponent}>
        Display TicTacToe
      </button>
      <div style={componentStyle}>
        <div>
          <h1 className="text-4xl bg-amber-300 font-semibold2">
            Welcome to Tic Tac Toe~!
          </h1>
          <div className="grid w-1/2">
            <div className="grid grid-cols-3 ml-auto">
              {displayArray.map((symbol) => {
                return (
                  <button
                    className=" bg-amber-700 w-32 h-24 p-8 text-amber-200 text-4xl border-2 border-yellow-300"
                    onClick={handleSymbol}
                  >
                    {symbol}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
