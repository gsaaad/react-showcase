import React, { useState } from "react";

const TicTacToe = () => {
  const [componentStyle, setComponentStyle] = useState({
    display: "none",
  });
  const handleShowComponent = (e) => {
    e.preventDefault();

    if (componentStyle.display === "none") {
      setComponentStyle({ display: "block" });
    } else {
      setComponentStyle({ display: "none" });
    }
  };
  return (
    <div className="bg-amber-800 rounded-xl">
      <button className="bg-btn" onClick={handleShowComponent}>
        Display TicTacToe
      </button>
      <div style={componentStyle}>Container</div>
    </div>
  );
};

export default TicTacToe;
