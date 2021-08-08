import React, { useState, useEffect } from "react";
import axios from "axios";
import "../pages/homepage.scss";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";

const HomePage = () => {
  const [gotData, setGotData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    const fetchGOTApiData = async () => {
      const response = await axios.get(
        "https://thronesapi.com/api/v2/Characters"
      );

      const { data } = response;
      setGotData(data);
      setIsLoading(false);
    };
    fetchGOTApiData();
  }, []);

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  const filteredCharacters = gotData.filter((character) =>
    character.fullName.toLowerCase().includes(textInput.toLowerCase())
  );

  return (
    <div className="home-container">
      <SearchBox placeholder="Search by name..." handleChange={handleChange} />
      <CardList gotData={filteredCharacters} isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
