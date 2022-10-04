import React, { useState } from "react";

const FlightAway = () => {
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
        Display FlightAway
      </button>
      <div style={componentStyle}>
        <div>
          <div>
            <form>
              <label>Option 1 Label </label>
              <input type="radio" />
              <label>Option 1 Label </label>
              <input type="radio" />
              <label>Option 1 Label </label>
              <input type="radio" />
            </form>
            <div>
              <h2>✈️Loading flights... ✈️</h2>
              <div>[flights]</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightAway;
