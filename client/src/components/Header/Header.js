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
            I'm <span className="introName">Almayo M. </span>, <br />a Web
            Developer
          </span>
          <p className="introPara">
            I am a skilled web developer with expertise in building efficient,
            <br />
            user-friendly websites and a proven track record of teaching and
            <br />
            mentoring students in web development.
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
