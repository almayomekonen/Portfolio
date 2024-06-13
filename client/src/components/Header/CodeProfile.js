import React from "react";
import "./CodeProfile.css";
const CodeProfile = () => {
  const profile = {
    name: "Almayo Mekonen",
    profession: "Web Developer and Teacher",
    skills: [
      `REACT", "NODE.JS", "NEXT.JS", "MongoDB"
   `,
    ],
    funFact: `I Can debug code while standing on 
    one leg!`,
    bestCoder: `true`,
  };

  return (
    <div className="code-container">
      <pre>
        <code>
          <span className="line">
            <span className="keyword">const</span> {" Profile = {"}
          </span>
          <span className="line">
            {"  FullName: "}
            <span className="string">"{profile.name}"</span>,
          </span>
          <span className="line">
            {"  Profession: "}
            <span className="string">"{profile.profession}"</span>,
          </span>
          <span className="line">
            {`  Skills: [
         `}
            <span className="array">
              {profile.skills.map((skill) => `"${skill}`).join(", ")}
            </span>
            ],
          </span>
          <span className="line">
            {"  BestCoder: "}
            <span className="true">{profile.bestCoder},</span>
          </span>
          <span className="line">
            {"  ProblemSolver: "}
            <span className="true">{profile.bestCoder},</span>
          </span>
          <span className="line">
            {"  FunFact: "}
            <span className="string">"{profile.funFact}"</span>
          </span>
          <span className="line">{"};"}</span>
        </code>
      </pre>
    </div>
  );
};

export default CodeProfile;
