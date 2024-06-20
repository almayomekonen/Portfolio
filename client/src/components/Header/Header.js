import React from "react";
import "./Header.css";
import btnImg from "../../assets/script.png";
import CodeProfile from "./CodeProfile";

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
          <div class="button-container">
            <button onClick={scrollToContact} className="button">
              <span>
                <img src={btnImg} alt="case-img" />
              </span>

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
