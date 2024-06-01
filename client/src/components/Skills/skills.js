import React from "react";
import "./skills.css";
import js from "../../assets/js.png";
import ReactIcon from "../../assets/React.png";
import typeScript from "../../assets/typescript.png";
import Node from "../../assets/node.png";
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Github from "../../assets/github.png";

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
          <img src={js} alt="JsIcon" className="skillBarImg" />
          <div className="skillBarText">
            <h2>JS</h2>
            <p>
              Proficient in JavaScript for creating interactive and dynamic web
              applications.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={ReactIcon} alt="ReactIcon" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React.js</h2>
            <p>
              Experienced in building dynamic user interfaces with React.js.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={typeScript} alt="typeScriptIcon" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Type-Script</h2>
            <p>
              Skilled in TypeScript for scalable and maintainable web
              applications with strong type safety.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Node} alt="NodeIcon" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Node.js</h2>
            <p>Proficient in backend development with Node.js.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Html} alt="HTMLIcon" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HTML</h2>
            <p>
              Strong foundation in HTML for building the structure of web
              applications.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Css} alt="CSSIcon" className="skillBarImg" />
          <div className="skillBarText">
            <h2>CSS</h2>
            <p>
              Strong foundation in CSS for styling and designing responsive web
              applications.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Github} alt="HTMLCSSIcon" className="skillBarImg" />
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
