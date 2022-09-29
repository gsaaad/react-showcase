import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./FAQ.css";
const FAQ = () => {
  const [componentStyle, setComponentStyle] = useState({
    display: "none",
  });
  const [arrow, setArrow] = useState(faArrowCircleDown);
  const [showAccordian, setShowAccordian] = useState({
    display: "none",
  });
  const FAQs = [
    {
      id: 1,
      question: "What are Cookies?",
      answer:
        "'Cookies' are simply small packages of data, send to a server/database when you visit a website. They remember users, exmaple: usernames or emails logged in with. They can also be used to track you around the website, where you went etc. ",
    },
    {
      id: 2,
      question: "What are they used for?",
      answer:
        "They are used to Send people personalized Ads, remember your cart items or wishlist, monitor browsing behavior and enhace website performance",
    },
    {
      id: 3,
      question: "Why do Cookies need consent?",
      answer:
        "Cookies are capable of packaging sensitive data, which can be personal or personally identifiable information to track who you are and what you do. Its important to give users their right to give consent when handing over SENSITIVE INFORMATION that can be monetized and exploited",
    },
    {
      id: 4,
      question: "What about Cookies of website targetting young children?",
      answer:
        "Actually, Websites that have under-13's, cannot use 'persistent' cookies to collection personal data from minors without verifiable parental or guardian consent.",
    },
    {
      id: 5,
      question:
        "Personal Information Protection and Electronic Documents Act (PIPEDA)",
      answer:
        "PIPEDA is an act that is practiced as an opt-out basis. This means that business's should give someone the option to refuce cookies, and that there is no need to get someone's consent unless the cookies collection personal data",
    },
    {
      id: 6,
      question: "Some Cookies aren't so bad?",
      answer:
        "Yes that's right! Some Cookies only work to ensure you get the maximum enhanced experience of using that website. This could be from past searched products that you wouldn't have remembered, or certain collections you added to the cart that you had your eyes on!",
    },
  ];

  const handleShowComponent = (e) => {
    e.preventDefault();

    if (componentStyle.display === "none") {
      setComponentStyle({ display: "block" });
    } else {
      setComponentStyle({ display: "none" });
    }
  };
  const handleAccordian = (e) => {
    e.preventDefault();
    if (showAccordian.display === "none") {
      setShowAccordian({ display: "block" });
      setArrow(faArrowCircleLeft);
    } else {
      setShowAccordian({ display: "none" });
      setArrow(faArrowCircleDown);
    }
  };
  return (
    <div className="bg-amber-800 rounded-xl">
      <button className="bg-btn" onClick={handleShowComponent}>
        Display FAQ: Frequently Asked Questions
      </button>
      <div style={componentStyle}>
        {FAQs.map((FAQ) => {
          return (
            <article
              key={FAQ.id}
              className="bg-amber-900 grid justify-items-center "
            >
              <div className="w-3/4 ">
                <header className=" bg-white rounded-xl mt-2 left-border ">
                  <h1 className="text-4xl font-semibold">{FAQ.question}</h1>
                  <button
                    className="text-green-500 text-2xl"
                    onClick={handleAccordian}
                  >
                    See More
                    <FontAwesomeIcon icon={arrow} />
                  </button>
                </header>
                <p
                  className="bg-white rounded-xl text-blue-500 "
                  style={showAccordian}
                >
                  {FAQ.answer}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
