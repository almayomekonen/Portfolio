import React, { useState, useEffect, useRef } from "react";
import { IoChatbox } from "react-icons/io5";
import ChatList from "./ChatList";
import { w3cwebsocket as Socket } from "websocket";
import "./Chat.css";

const ChatContainer = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [clickedQuestions, setClickedQuestions] = useState(0);
  const clientRef = useRef(null);

  useEffect(() => {
    const newClient = new Socket("ws://88.99.24.18:8000");
    clientRef.current = newClient;

    newClient.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    newClient.onopen = () => {
      console.log("WebSocket Client Connected");
    };

    newClient.onmessage = (message) => {
      try {
        const newMessage = JSON.parse(message.data);
        if (newMessage.type === "question") {
          setQuestions((prevQuestions) => [
            ...prevQuestions,
            newMessage.question,
          ]);
        } else if (newMessage.type === "answer") {
          setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [newMessage.question]: newMessage.answer,
          }));
        } else {
          console.log("Unexpected message type:", newMessage.type);
        }
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };

    newClient.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      if (clientRef.current) {
        clientRef.current.close();
      }
    };
  }, []);

  const handleQuestionClick = (question) => {
    if (!answers[question]) {
      sendQuestion(question);
      setClickedQuestions((prev) => prev + 1);
    }
  };

  const sendQuestion = (question) => {
    if (clientRef.current) {
      clientRef.current.send(JSON.stringify({ type: "question", question }));
    }
  };

  return (
    <>
      <div className="chat-container">
        <div className="chat">
          Chat <IoChatbox className="message-button" />
        </div>
        <hr />
        <h4>Welcome to my digital service 💙</h4>
        <span className="today">Today</span>
        <ChatList
          questions={questions}
          answers={answers}
          handleQuestionClick={handleQuestionClick}
        />
        {clickedQuestions === questions.length && (
          <div className="message-end-chat">
            Thank you for completing all the questions! I would love to see you
            in lessons.
          </div>
        )}
      </div>
    </>
  );
};

export default ChatContainer;
