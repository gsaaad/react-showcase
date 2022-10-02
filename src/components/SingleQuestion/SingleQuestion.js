import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./SingleQuestion.css";

const SingleQuestion = ({ id, question, answer }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="bg-amber-900 grid justify-items-center" key={id}>
      <div className="bg-white w-3/4 rounded-xl">
        <header className=" w-1/2 bg-white rounded-xl mt-6 left-border mx-auto drop-shadow-2xl">
          <h1 className="text-3xl font-semibold"> {question}</h1>
          <button
            className="text-green-500 text-2xl"
            onClick={() => {
              setShowInfo(!showInfo);
            }}
          >
            See More
            {showInfo ? (
              <FontAwesomeIcon icon={faArrowCircleDown} />
            ) : (
              <FontAwesomeIcon icon={faArrowCircleLeft} />
            )}
          </button>
        </header>
        {showInfo && (
          <p className=" w-2/4 my-4  text-2xl font-medium bg-white rounded-xl text-blue-500 left-answer-border mx-auto drop-shadow-2xl">
            {answer}
          </p>
        )}
      </div>
    </article>
  );
};
export default SingleQuestion;
