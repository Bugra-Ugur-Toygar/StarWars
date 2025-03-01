import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/detail.css";

const StarshipDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/${id}/`).then((response) => {
      setStarship(response.data);
    });
  }, [id]);

  if (!starship) return <p>Loading...</p>;

  return (
    <div className="detail-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back
      </button>
      <div className="starship-detail">
        <h1>{starship.name}</h1>
        <p>
          <strong>Model:</strong> {starship.model}
        </p>
        <p>
          <strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}
        </p>
        <p>
          <strong>Passengers:</strong> {starship.passengers}
        </p>
        <p>
          <strong>Max Speed:</strong> {starship.max_atmosphering_speed}
        </p>
        <p>
          <strong>Manufacturer:</strong> {starship.manufacturer}
        </p>
        <p>
          <strong>Crew:</strong> {starship.crew}
        </p>
        <p>
          <strong>Cargo Capacity:</strong> {starship.cargo_capacity}
        </p>
      </div>
    </div>
  );
};

export default StarshipDetail;
