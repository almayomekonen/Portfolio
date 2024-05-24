import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
import Git from "../../assets/git.jpeg";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web developer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of programming concepts and a keen eye for detail. I am
        proficient in HTML, CSS, JavaScript, React, NodeJs and more as well as
        such Git, Github, Docker.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="ReactIcon" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React.js</h2>
            <p>
              Experienced in building dynamic user interfaces with React.js.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="NodeIcon" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Node.js</h2>
            <p>Proficient in backend development with Node.js.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="HTMLCSSIcon" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HTML & CSS</h2>
            <p>
              Strong foundation in HTML and CSS for building responsive web
              applications.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Git} alt="HTMLCSSIcon" className="skillBarImg" />
          <div className="skillBarText">
            <h2>GIT & GITHUB</h2>
            <p>
              Proficient in collaborating and managing projects with GitHub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
