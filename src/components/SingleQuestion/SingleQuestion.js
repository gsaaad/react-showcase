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
      <div className="bg-white w-5/6 rounded-xl my-2">
        <header className="bg-white rounded-xl my-4 left-border mx-2 drop-shadow-2xl">
          <h1 className="text-lg sm:text-3xl font-semibold"> {question}</h1>
          <button
            className="text-green-500 text-md sm:text-2xl my-2"
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
          <p className=" w-5/6 my-4 text-sm sm:text-2xl font-medium bg-white rounded-xl text-blue-500 left-answer-border mx-auto drop-shadow-2xl p-2">
            {answer}
          </p>
        )}
      </div>
    </article>
  );
};
export default SingleQuestion;
