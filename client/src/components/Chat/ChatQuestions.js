import React from "react";
import "./Chat.css";

const ChatQuestions = ({ question, answer, handleQuestionClick }) => {
  return (
    <>
      <li className="questions-list">
        <button
          className="question-btn"
          onClick={() => handleQuestionClick(question)}
        >
          {question}
        </button>
      </li>
      <div>
        {answer && (
          <li className="answers-list">
            <div className="answer">{answer}</div>
          </li>
        )}
      </div>
    </>
  );
};

export default ChatQuestions;
