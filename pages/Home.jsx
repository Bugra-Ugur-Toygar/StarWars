import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import StarshipCard from "../components/StarshipCard";
import Navbar from "../components/Navbar";
import LoadMoreButton from "../components/LoadMoreButton";
import "../styles/home.css";

const Home = () => {
  const [starships, setStarships] = useState([]);
  const [nextPage, setNextPage] = useState("https://swapi.dev/api/starships/");
  const [searchTerm, setSearchTerm] = useState("");

  // API'den yıldız gemilerini çeken fonksiyon
  const fetchStarships = useCallback(async () => {
    if (!nextPage) return;
    try {
      const response = await axios.get(nextPage);
      setStarships((prevStarships) => [
        ...prevStarships,
        ...response.data.results,
      ]);
      setNextPage(response.data.next);
    } catch (error) {
      console.error("Error fetching starships:", error);
    }
  }, [nextPage]); // `nextPage` bağımlılığı eklendi

  // İlk yüklemede API'den veri çeker
  useEffect(() => {
    fetchStarships();
  }, [fetchStarships]); // fetchStarships bağımlılığı eklendi

  // Kullanıcı arama yaptığında filtreleme işlemi
  const filteredStarships = starships.filter(
    (ship) =>
      ship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ship.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <Navbar setSearchTerm={setSearchTerm} />
      <div className="starships-grid">
        {filteredStarships.map((ship, index) => (
          <StarshipCard key={index} starship={ship} id={index + 1} />
        ))}
      </div>
      {nextPage && <LoadMoreButton fetchStarships={fetchStarships} />}
    </div>
  );
};

export default Home;
