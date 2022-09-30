import React, { useState } from "react";

const TicTacToe = () => {
  const [componentStyle, setComponentStyle] = useState({
    display: "none",
  });

  const displayArray = [
    { symbol: "" },
    { symbol: "" },
    { symbol: "" },
    { symbol: "" },
    { symbol: "" },
    { symbol: "" },
    { symbol: "" },
    { symbol: "" },
    { symbol: "" },
  ];
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

    e.target.innerHTML = "x";
  };
  return (
    <div className="bg-amber-800 rounded-xl">
      <button className="bg-btn" onClick={handleShowComponent}>
        Display TicTacToe
      </button>
      <div style={componentStyle}>
        <div className="grid grid-cols-2 rounded-xl">
          <div>
            <h1 className="text-4xl bg-amber-300 font-semibold2  rounded-xl">
              Welcome to Tic Tac Toe~!
            </h1>
            <p className="text-2xl bg-amber-400 h-1/4 rounded-xl">
              Player 1: Choose your symbol!
            </p>
            <button className="text-4xl bg-orange-500 w-1/2 rounded-xl">
              X
            </button>
            <br />
            <button className="text-4xl bg-orange-400 w-1/2 rounded-xl">
              O
            </button>
            <p className="text-2xl bg-amber-400 h-1/4 rounded-xl">
              Player 2: Your symbol is:{" "}
            </p>
          </div>
          <div className="grid w-1/2">
            <div className="grid grid-cols-3 ml-auto">
              {Object.values(displayArray).map((key, value) => {
                return (
                  <button
                    className=" bg-amber-700 w-32 h-24 p-8 text-amber-200 text-4xl border-2 border-yellow-300"
                    onClick={handleSymbol}
                    key={value}
                    id={value}
                  >
                    {key.symbol}
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
