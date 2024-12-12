import "./WhatIDo.css";
import almayo from "../../assets/almayo.png";
import classImage from "../../assets/class.JPG";
import { FcGraduationCap } from "react-icons/fc";

const WhatIDo = () => {
  return (
    <>
      <section id="what-i-do">
        <img src={almayo} alt="man" className="almayo-image" />

        <span className="skillTitle">Hey everyone!</span>

        <div className="horizontal-section">
          <img
            src={classImage}
            alt="Almayo teaching a class"
            className="class-image"
          />

          <div className="text-section">
            <div className="bouncing-emoji">
              <FcGraduationCap size={40} />
            </div>

            <span className="skillDesc">
              I'm Almayo Mekonen, a full-stack web developer and teacher who
              loves creating awesome and user-friendly websites. I enjoy sharing
              my knowledge and passion for programming with my students and take
              pride in helping others learn and grow in the tech world. Let's
              build something amazing together!
              <br />
              <br />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIDo;
