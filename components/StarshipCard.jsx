import React from "react";
import { Link } from "react-router-dom";
import "../styles/starshipCard.css";

const StarshipCard = ({ starship, id }) => {
  return (
    <Link to={`/starship/${id}`} className="starship-card">
      <h3>{starship.name}</h3>
      <p>
        <strong>Model:</strong> {starship.model}
      </p>
      <p>
        <strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}
      </p>
    </Link>
  );
};

export default StarshipCard;
