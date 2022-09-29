import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const ReviewCarousel = () => {
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
        Display Review Casousel
      </button>
      <div></div>
      <div
        style={componentStyle}
        className="grid grid-cols-1 bg-amber-400 rounded-xl"
      >
        <div className="grid grid-cols-3  bg-amber-500 p-4 m-4 rounded-xl">
          <div className="h-96 bg-amber-100 rounded-xl mr-2 ">
            <img
              className="rounded-xl mx-auto my-8"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/54.jpg"
              alt="Avatar"
            />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="h-96 bg-amber-100 rounded-xl  ">
            <img
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/7.jpg"
              alt="Avatar"
              className="rounded-xl mx-auto my-8"
            />
          </div>
          <div className="h-96 bg-amber-100 rounded-xl ml-2 ">
            <img
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/47.jpg"
              alt="Avatar"
              className="rounded-xl mx-auto my-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewCarousel;
