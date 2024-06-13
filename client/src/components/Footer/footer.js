import React from "react";
import gitIcon from "../../assets/github.png";
import linkdeinIcon from "../../assets/linkdein.png";
import instagramIcon from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="links">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/almayo-mekonen-0835942b4/"
        >
          <img src={linkdeinIcon} alt="linkedin" className="link" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/almayomekonen"
        >
          <img src={gitIcon} alt="Github" className="link" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/almayomekonen/"
        >
          <img src={instagramIcon} alt="Instagram" className="link" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100002097524154&locale=he_IL"
        >
          <img src={facebook} alt="facebook" className="link" />
        </a>
      </div>
      <footer className="footer">
        Copyright &#169; 2023 Almayo Mekonen. All right received.
      </footer>
    </>
  );
};

export default Footer;
