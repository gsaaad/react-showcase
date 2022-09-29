import React, { useState } from "react";
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
  const reviews = [
    {
      name: "Michael J.",
      title: "Front-end Developer",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/54.jpg",
      stars: "⭐⭐⭐⭐",
      description:
        "I'm a big fan of this STOCKSCREENER. It's a simple and easy-to-use tool that I use all the time, it makes me thousands of dollars!",
    },
    {
      name: "John M.",
      title: "Back-end Developer",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/7.jpg",
      stars: "⭐⭐⭐",
      description:
        "I own many shirts, but none like this one. I put this shirt on, and it immediately became my one true love. It's very special and I will never be without it.",
    },
    {
      name: "Michelle J.",
      title: "UXI Designer",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/47.jpg",
      stars: "⭐⭐⭐⭐⭐",
      description:
        "Coming back to this place made it feel like home sweet home. Very nice breakfast place, food was good, presentation was creative and service was great!",
    },
  ];
  return (
    <div className="bg-amber-800 rounded-xl">
      <button className="bg-btn" onClick={handleShowComponent}>
        Display Review Casousel
      </button>
      <div></div>
      <div
        style={componentStyle}
        className="grid grid-rows-1 bg-amber-400 rounded-xl"
      >
        <div className="flex flex-row ">
          <button className="basis-1/4 bg-red-100 rounded-xl p-4 m-2 md:text-4xl font-semibold">
            Back
          </button>
          <div className="grid grid-cols-3  bg-amber-500 p-4 m-4 rounded-xl">
            {reviews.map((review) => {
              return (
                <div key={review.name} className=" lg:text-2xl">
                  <div className="h-96 bg-amber-100 rounded-xl mr-2 ">
                    <img
                      className="rounded-xl mx-auto py-2"
                      src={review.avatar}
                      alt="Avatar"
                    />
                    <p>{review.stars}</p>
                    <p>{review.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="basis-1/4  bg-red-100 rounded-xl p-4 m-2 md:text-4xl font-semibold">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default ReviewCarousel;
