import React from "react";
import "../clientCard/ClientCard.css";
import "./Feedback.css";
import neta from "../../assets/neta.png";
import idoRoth from "../../assets/ido.jpeg";
import tali from "../../assets/tali.jpeg";
import aviel from "../../assets/aviel.png";
import alon from "../../assets/alon.jpeg";
import itamar from "../../assets/itamar.jpeg";
import shelly from "../../assets/shelly.jpeg";
import portfolio2 from "../../assets/portfolio-2.png";
import ClientCard from "../clientCard/ClientCard";

export default function Feedback() {
  return (
    <>
      <div id="feedbackPage">
        <span className="feedbackDesc">
          Here is some feedback from my students and clients...
        </span>
        <h1 className="feedbackPageTitle">
          <p className="students-feedback">{`< Students & Clients >`}</p>
        </h1>
        <br />
        <div className="cards-scroller">
          <ClientCard
            image={neta}
            title="Neta"
            description="
                Dear Almayo, Thank you so much for teaching me React and GitHub. 
                Your clear and patient instruction made everything easier to understand. 
                I really appreciate your help and support. You’re an amazing teacher!
                "
          />
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
            image={shelly}
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
