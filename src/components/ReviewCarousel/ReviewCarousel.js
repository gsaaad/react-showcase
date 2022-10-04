import React, { useState, useEffect } from "react";

let count = 0;
const ReviewCarousel = () => {
  // if screen width not long enough, show product review card, one at a time
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth, false);
  }, []);

  let [counterValue, setCounterValue] = useState(0);
  const [componentStyle, setComponentStyle] = useState({
    display: "none",
  });
  const [slideIn, setSlideIn] = useState(
    "bg-amber-500 p-4 m-4 rounded-xl drop-shadow-[0_10px_10px_rgba(10,10,10,1)] hover:drop-shadow-[0_10px_10px_rgba(255,255,255,1)]"
  );
  let screenSize = screenWidth < 1279;

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
    {
      name: "Jane M.",
      title: "Python Developer",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/132.jpg",
      stars: "⭐⭐⭐⭐",
      description:
        " I have a dog so I go through a lot of shoes. When I'm doing a clean-up or moving furniture, I have to change shoes to avoid my dog chewing my shoes. So far, I've tried many shoes on the market. These might be one of my favourite ones",
    },
    {
      name: "Chandler B.",
      title: "Front/Back end developer",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/212.jpg",
      stars: "⭐⭐⭐⭐⭐",
      description:
        "I've seen this artist play 5 times! My favourite artist and overall best concert i've been to. Great service, great music, great folks, Cheers!",
    },
    {
      name: "Sean E.",
      title: "Human Resources",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/108.jpg",
      stars: "⭐",
      description:
        "I personally did not like this brand of juice although all my friends love it. I'm going to skip out on this nasty mixture of beets, celery and potatoes and buy something sweeter, Yuck!",
    },
    {
      name: "Brad K.",
      title: "Front-end Developer & CFO",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg",
      stars: "⭐⭐",
      description:
        "I've seen better perfomance from my grandma. Save your money and stream it online. Would not recommend. The food was not bad",
    },
    {
      name: "Peter S.",
      title: "Python Analyst",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/121.jpg",
      stars: "⭐⭐⭐⭐",
      description:
        "Awesome time watching the podcast. Very informative, would watch again!",
    },
    {
      name: "Steve T.",
      title: "Junior Java Developer",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/164.jpg",
      stars: "⭐⭐",
      description:
        "They said they had spicy food, it was not spicy. Please go to another restaurant",
    },
  ];

  const handleNextImg = (e) => {
    e.preventDefault();
    if (screenSize) {
      count = (count + 1) % reviews.length;
      setCounterValue(count);
      setSlideIn("bg-amber-500 p-4 m-4 rounded-xl animated slideInLeft");
      setTimeout(() => {
        setSlideIn(
          "bg-amber-500 p-4 m-4 rounded-xl drop-shadow-[0_10px_10px_rgba(10,10,10,1)] hover:drop-shadow-[0_10px_10px_rgba(255,255,255,1)]"
        );
      }, 900);
    } else {
      count = (count + 3) % reviews.length;
      setCounterValue(count);
      setSlideIn(
        "grid grid-cols-3  bg-amber-500 p-4 m-4 rounded-xl animated slideInLeft"
      );
      // after 900ms return classNames to normal, allow for sliding pattern
      setTimeout(() => {
        setSlideIn(
          "grid grid-cols-3  bg-amber-500 p-4 m-4 rounded-xl drop-shadow-[0_10px_10px_rgba(10,10,10,1)] hover:drop-shadow-[0_10px_10px_rgba(255,255,255,1)]"
        );
      }, 900);
    }
  };
  const handlePrevImg = (e) => {
    e.preventDefault();
    if (screenSize) {
      if (count - 1 < 0) {
        count = reviews.length - 1;
      } else {
        count -= 1;
      }

      setCounterValue(count);
      setSlideIn(" bg-amber-500 p-4 m-4 rounded-xl animated slideInRight");
      // after 900ms return classNames to normal, allow for sliding pattern
      setTimeout(() => {
        setSlideIn(" bg-amber-500 p-4 m-4 rounded-xl");
      }, 900);
    } else if (count - 3 < 0) {
      count = reviews.length - 3;
    } else {
      count -= 3;
    }
    setCounterValue(count);
    setSlideIn(
      "grid grid-cols-3  bg-amber-500 p-4 m-4 rounded-xl animated slideInRight"
    );
    // after 900ms return classNames to normal, allow for sliding pattern
    setTimeout(() => {
      setSlideIn("grid grid-cols-3  bg-amber-500 p-4 m-4 rounded-xl");
    }, 900);
  };
  return (
    <div className="bg-amber-800 rounded-xl">
      <button className="bg-btn" onClick={handleShowComponent}>
        Display Review Casousel
      </button>

      <div
        style={componentStyle}
        className="grid grid-rows-1 bg-amber-400 rounded-xl"
      >
        {
          <div className="flex flex-row ">
            <button
              className="h-32 my-auto bg-amber-500 border-4 border-rose-800 rounded-xl p-4 m-2 md:text-4xl font-med sm:text-xl "
              onClick={handlePrevImg}
            >
              Prev
            </button>

            {screenWidth < 1279 ? (
              <div className={slideIn}>
                <div>
                  <div className="bg-amber-100 border-4 border-rose-800 rounded-xl ">
                    <img
                      className="rounded-xl mx-auto py-2 drop-shadow-[0_10px_10px_rgba(10,10,10,0.35)] "
                      src={reviews[count].avatar}
                      alt="Avatar"
                    />
                    <h2 className="text-rose-600 font-semibold text-2xl lg:text-3xl">
                      {reviews[count].name}
                    </h2>
                    <p className="animated infinite jello">
                      {reviews[count].stars}
                    </p>
                    <p className="text-rose-400 font-medium text-lg p-2 md:text-xl lg:text-2xl">
                      {reviews[count].description}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`${slideIn} grid grid-cols-3`}>
                <div className=" lg:text-2xl">
                  <div className="h-full bg-amber-100 border-4 border-rose-800 rounded-xl mr-2 ">
                    <img
                      className="rounded-xl mx-auto py-2 "
                      src={reviews[count].avatar}
                      alt="Avatar"
                    />
                    <h2 className="text-rose-600 font-semibold text-2xl lg:text-3xl">
                      {reviews[count].name}
                    </h2>
                    <p className="animated infinite jello">
                      {reviews[count].stars}
                    </p>
                    <p className="text-rose-400 font-medium text-lg p-2 md:text-xl lg:text-2xl">
                      {reviews[count].description}
                    </p>
                  </div>
                </div>

                <div className=" lg:text-2xl">
                  <div className="h-full bg-amber-100 border-4 border-rose-800 rounded-xl mr-2  ">
                    <img
                      className="rounded-xl mx-auto py-2 "
                      src={reviews[count + 1].avatar}
                      alt="Avatar"
                    />
                    <h2 className="text-rose-600 font-semibold text-2xl lg:text-3xl">
                      {reviews[count + 1].name}
                    </h2>

                    <p className="animated infinite jello">
                      {reviews[count + 1].stars}
                    </p>
                    <p className="text-rose-400 font-medium text-lg p-2 md:text-xl lg:text-2xl">
                      {reviews[count + 1].description}
                    </p>
                  </div>
                </div>

                <div className=" lg:text-2xl">
                  <div className="h-full  bg-amber-100 border-4 border-rose-800 rounded-xl mr-2">
                    <img
                      className="rounded-xl mx-auto py-2 "
                      src={reviews[count + 2].avatar}
                      alt="Avatar"
                    />
                    <h2 className="text-rose-600 font-semibold text-2xl lg:text-3xl">
                      {reviews[count + 2].name}
                    </h2>

                    <p className="animated infinite jello">
                      {reviews[count + 2].stars}
                    </p>
                    <p className="text-rose-400 font-medium text-lg p-2 md:text-xl lg:text-2xl">
                      {reviews[count + 2].description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              className="h-32 my-auto bg-amber-500 border-4 border-rose-800 rounded-xl p-4 m-2 md:text-4xl font-med sm:text-xl "
              onClick={handleNextImg}
            >
              Next
            </button>
          </div>
        }
      </div>
    </div>
  );
};
export default ReviewCarousel;
