import React from "react";
import CodeProfile from "./CodeProfile";
import "./Header.css";
import "./Button.css";

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
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
          <div className="button-container">
            <button onClick={scrollToContact} className="button">
              <span>Contact Me</span>
            </button>
          </div>
        </div>
        <CodeProfile />
      </section>
    </>
  );
};

export default Header;
