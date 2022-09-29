import React, { useState } from "react";

let count = 0;
const ReviewCarousel = () => {
  let [counterValue, setCounterValue] = useState(0);
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
    count = (count + 3) % reviews.length;
    setCounterValue(count);
  };
  const handlePrevImg = (e) => {
    e.preventDefault();

    if (count - 3 < 0) {
      count = reviews.length - 1;
    } else {
      count -= 1;
    }
    setCounterValue(count);
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
              className="basis-1/4 bg-red-100 rounded-xl p-4 m-2 md:text-4xl font-semibold"
              onClick={handlePrevImg}
            >
              Previous
            </button>
            <div className="grid grid-cols-3  bg-amber-500 p-4 m-4 rounded-xl">
              <div className=" lg:text-2xl">
                <div className="h-96 bg-amber-100 rounded-xl mr-2 ">
                  <img
                    className="rounded-xl mx-auto py-2"
                    src={reviews[count].avatar}
                    alt="Avatar"
                  />
                  <h2>{reviews[count].name}</h2>
                  <p>{reviews[count].stars}</p>
                  <p>{reviews[count].description}</p>
                </div>
              </div>
              <div className=" lg:text-2xl">
                <div className="h-96 bg-amber-100 rounded-xl mr-2 ">
                  <img
                    className="rounded-xl mx-auto py-2"
                    src={reviews[count + 1].avatar}
                    alt="Avatar"
                  />
                  <h2>{reviews[count + 1].name}</h2>

                  <p>{reviews[count + 1].stars}</p>
                  <p>{reviews[count + 1].description}</p>
                </div>
              </div>
              <div className=" lg:text-2xl">
                <div className="h-96 bg-amber-100 rounded-xl mr-2 ">
                  <img
                    className="rounded-xl mx-auto py-2"
                    src={reviews[count + 2].avatar}
                    alt="Avatar"
                  />
                  <h2>{reviews[count + 2].name}</h2>

                  <p>{reviews[count + 2].stars}</p>
                  <p>{reviews[count + 2].description}</p>
                </div>
              </div>
            </div>

            <button
              className="basis-1/4  bg-red-100 rounded-xl p-4 m-2 md:text-4xl font-semibold"
              onClick={handleNextImg}
            >
              Next
            </button>
          </div>
          /* <div className="w-full select-none relative">
          <img src={reviews[counterValue].avatar} alt="avatar" />

          <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 justify-between items-center">
            <button onClick={handlePrevImg}>Previous</button>
            <button onClick={handleNextImg}>Next</button>
          </div>
        </div> */
        }
      </div>
    </div>
  );
};
export default ReviewCarousel;
