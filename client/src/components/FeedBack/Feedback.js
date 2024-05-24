import React from "react";
import "../clientCard/ClientCard.css";
import "./Feedback.css";
import idoRoth from "../../assets/ido.jpeg";
import tali from "../../assets/tali.jpeg";
import aviel from "../../assets/aviel.png";
import alon from "../../assets/alon.jpeg";
import itamar from "../../assets/itamar.jpeg";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import ClientCard from "../clientCard/ClientCard";

export default function Feedback() {
  return (
    <>
      <div id="feedbackPage">
        <h1 className="feedbackPageTitle">Students Feedback</h1>

        <span className="feedbackDesc">
          As an private tutor , I have had the privilege of teaching a wide
          variety of students from diverse backgrounds. Seeing their growth and
          accomplishments has been incredibly rewarding.
        </span>

        <div className="cards-scroller">
          <ClientCard
            image={idoRoth}
            title="Ido"
            description="
                You delivered the material in a professional manner. 
                Thanks to your guidance, I experienced significant improvement.
                Highly recommended for anyone interested!
                "
          />
          <ClientCard
            image={itamar}
            title="Itamar"
            description="I arrived with no development knowledge, and I learned a lot and managed to build projects myself!"
          />
          <ClientCard
            image={aviel}
            title="Aviel"
            description="
            Thanks you, I finally grasped the core concepts in React that I struggled to uncover on my own.
          "
          />

          <ClientCard
            image={alon}
            title="Alon"
            description="
            I encountered several teachers who failed to help me, thanks to Almayo I finished my project, thank you very much!
            "
          />
          <ClientCard
            image={tali}
            title="Tali"
            description="
            An excellent teacher who emphasizes progress, recommended for anyone interested!
          "
          />
          <ClientCard
            image={portfolio1}
            title="Shelly"
            description="
          Almayo is no less than an excellent teacher who puts the student first!!
          "
          />
          <ClientCard
            image={portfolio2}
            title="Roza"
            description="
          An excellent teacher who explains concepts clearly and precisely, highly recommend!!
          "
          />
        </div>
      </div>
    </>
  );
}
