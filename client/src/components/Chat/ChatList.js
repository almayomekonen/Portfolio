import React from "react";
import ChatQuestions from "./ChatQuestions";
import "./Chat.css";

const ChatList = ({ questions, answers, handleQuestionClick }) => {
  return (
    <ul className="questions">
      {questions.map((question, index) => (
        <ChatQuestions
          key={index}
          question={question}
          answer={answers[question]}
          handleQuestionClick={handleQuestionClick}
        />
      ))}
    </ul>
  );
};

export default ChatList;
