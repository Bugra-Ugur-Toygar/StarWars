import React from "react";
import "../styles/home.css";

const LoadMoreButton = ({ fetchStarships }) => {
  return (
    <button className="load-more" onClick={fetchStarships}>
      Load More
    </button>
  );
};

export default LoadMoreButton;
