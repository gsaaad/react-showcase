import React, { useState } from "react";

import SingleQuestion from "../SingleQuestion/SingleQuestion";

const Faq = () => {
  const [componentStyle, setComponentStyle] = useState({
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
        "They are used to Send people personalized Ads, remember your cart items or wishlist, monitor browsing behavior and enhance website performance.",
    },
    {
      id: 3,
      question: "Why do Cookies need consent?",
      answer:
        "Cookies are capable of packaging sensitive data, which can be personal or personally identifiable information to track who you are and what you do. Its important to give users their right to give consent when handing over SENSITIVE INFORMATION that can be monetized and exploited.",
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
        "PIPEDA is an act that is practiced as an opt-out basis. This means that business's should give someone the option to refuce cookies, and that there is no need to get someone's consent unless the cookies collection personal data.",
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

  return (
    <div className="bg-amber-800 rounded-xl">
      <button className="bg-btn" onClick={handleShowComponent}>
        Display FAQ: Frequently Asked Questions
      </button>
      <div style={componentStyle}>
        {FAQs.map((FAQ) => {
          return <SingleQuestion {...FAQ} key={FAQ.id} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
