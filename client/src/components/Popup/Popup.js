import React, { useEffect, useState } from "react";
import "./Popup.css";
import { motion } from "framer-motion";

const Popup = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="popup-overlay">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="popup-content"
        >
          <h2>A Special offer don't miss it!</h2>
          <p>{message}</p>
          <button onClick={onClose}>Close</button>
        </motion.div>
      </div>
    </>
  );
};

export default Popup;
