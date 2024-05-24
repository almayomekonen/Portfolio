import React from "react";
import "./Header.css";
import bg from "../../assets/almayo.png";
import btnImg from "../../assets/hireme.png";
import { motion } from "framer-motion";

const Intro = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Almayo</span> <br />
          Web Developer
        </span>
        <p className="introPara">
          I am a skilled web Developer with experience in creating
          <br />
          visually appealing and user friendly websites.
        </p>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#FFFF00" }}
          transition={{ type: "spring", stiffness: 500 }}
          className="btn"
          onClick={scrollToContact}
        >
          <img src={btnImg} alt="Hire" className="btnImg" />
          Contact Me
        </motion.button>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
