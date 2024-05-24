import React from "react";
import "./works.css";
import { motion } from "framer-motion";
import images from "../../assets/images";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to build amazing websites, projects, and applications.
      </span>

      <ul className="worksImgs">
        {images.map((image) => (
          <li key={image.alt}>
            <a target="_blank" rel="noreferrer" href={image.href}>
              <img className="works-img" {...image} alt={image.alt} />
              <p>{image.description}</p>
            </a>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
        className="workBtn"
      >
        See More
      </motion.button>
    </section>
  );
};

export default Works;
