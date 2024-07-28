import "./WhatIDo.css";
import almayo from "../../assets/almayo.png";
import { Link } from "react-router-dom";

const WhatIDo = () => {
  return (
    <>
      <section id="what-i-do">
        <img src={almayo} alt="man" className="almayo-image" />
        <span className="skillTitle">Hey everyone!</span>
        <span className="skillDesc">
          I'm Almayo Mekonen, a full-stack web developer and teacher who loves
          creating awesome and user-friendly websites.I enjoy sharing my
          knowledge and passion for programming with my students and take pride
          in helping others learn and grow in the tech world. Let's build
          something amazing together!
          <br />
          <br />
          <Link
            target="_blank"
            className="course-link"
            to="https://website-construction-studies.my.canva.site/full-stack-course"
          >
            View my Course
          </Link>
        </span>
      </section>
    </>
  );
};

export default WhatIDo;
