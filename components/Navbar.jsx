import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setSearchTerm }) => {
  return (
    <nav className="navbar">
      <h1>STAR WARS</h1>
      <input
        type="text"
        placeholder="Name / Model"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;
