import React, { useState } from "react";

const TicTacToe = () => {
  const [componentStyle, setComponentStyle] = useState({
    display: "none",
  });
  const [playerOneSymbol, setPlayerOneSymbol] = useState("");
  const [playerTwoSymbol, setPlayerTwoSymbol] = useState("");
  const [symbolDisplayStyle, setSymbolDisplayStyle] = useState({
    display: "none",
  });
  const [menuDisplayStyle, setMenuDisplayStyle] = useState({
    display: "block",
  });
  const [displayArray, setDisplayArray] = useState([
    {
      symbol: "X",
    },
    {
      symbol: "",
    },
    {
      symbol: "O",
    },
    {
      symbol: "",
    },
    {
      symbol: "",
    },
    {
      symbol: "",
    },
    {
      symbol: "O",
    },
    {
      symbol: "X",
    },
    {
      symbol: "",
    },
  ]);

  const [playerOneMove, setPlayerOneMove] = useState(true);
  const handleShowComponent = (e) => {
    e.preventDefault();

    if (componentStyle.display === "none") {
      setComponentStyle({ display: "block" });
    } else {
      setComponentStyle({ display: "none" });
    }
  };
  const handleSymbolPicker = (e) => {
    e.preventDefault();
    if (e.target.innerHTML === "X") {
      setPlayerOneSymbol(e.target.innerHTML);
      setPlayerTwoSymbol("O");
    } else {
      setPlayerOneSymbol(e.target.innerHTML);
      setPlayerTwoSymbol("X");
    }
    setSymbolDisplayStyle({ display: "block" });
    setMenuDisplayStyle({ display: "none" });
  };

  const handleSymbol = (e) => {
    e.preventDefault();
    const buttonId = e.target.id;
    let squares = [...displayArray];
    squares[buttonId].symbol = "X";
    setDisplayArray(squares);
  };
  return (
    <div className="bg-amber-800 rounded-xl">
      <button className="bg-btn" onClick={handleShowComponent}>
        Display TicTacToe
      </button>
      <div style={componentStyle}>
        <div className="grid grid-cols-2 rounded-xl">
          <div>
            <h1
              className="text-4xl bg-amber-300 font-semibold2  rounded-xl"
              style={menuDisplayStyle}
            >
              Welcome to Tic Tac Toe~!
            </h1>
            <p
              className="text-2xl bg-amber-400 h-1/4 rounded-xl"
              style={menuDisplayStyle}
            >
              Player 1: Choose your symbol!
            </p>
            <p
              className="text-2xl bg-amber-400 h-1/4 rounded-xl"
              style={symbolDisplayStyle}
            >
              Player 1: Your symbol is: {playerOneSymbol}
            </p>
            <button
              className="text-4xl bg-orange-500 w-1/2 rounded-xl mx-auto"
              style={menuDisplayStyle}
              onClick={handleSymbolPicker}
            >
              X
            </button>
            <br />
            <button
              className="text-4xl bg-orange-400 w-1/2 rounded-xl mx-auto"
              style={menuDisplayStyle}
              onClick={handleSymbolPicker}
            >
              O
            </button>
            <p
              className="text-2xl bg-amber-400 h-1/4 rounded-xl"
              style={symbolDisplayStyle}
            >
              Player 2: Your symbol is: {playerTwoSymbol}
            </p>
          </div>
          <div className="grid w-1/2">
            <div className="grid grid-cols-3 ml-auto ">
              {Object.values(displayArray).map((box, value) => {
                return (
                  <button
                    className=" bg-amber-700 w-32 h-24 p-8 text-amber-200 text-4xl border-2 border-yellow-300"
                    onClick={handleSymbol}
                    key={value}
                    id={value}
                  >
                    {box.symbol}
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
