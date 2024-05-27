import React, { useState } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import { RiChatDeleteFill } from "react-icons/ri";
import Chat from "../Chat/Chat";
import "./Chat.css";

const ChatIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen ? (
        <>
          <RiChatDeleteFill
            className="chat-icon"
            onClick={() => setIsOpen(false)}
          />
          <Chat />
        </>
      ) : (
        <BsChatDotsFill className="chat-icon" onClick={() => setIsOpen(true)} />
      )}
    </div>
  );
};

export default ChatIcon;
