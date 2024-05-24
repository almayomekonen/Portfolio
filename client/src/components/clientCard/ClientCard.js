import React from "react";
import "./ClientCard.css";

export default function ClientCard({ image, title, description }) {
  return (
    <div className="card-container">
      <img className="round" src={image} alt="user" />
      <h3>{title}</h3>
      <p className="client">{description}</p>
    </div>
  );
}
