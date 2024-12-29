import React, { useState } from "react";
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [cityInput, setCityInput] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && cityInput.trim() !== "") {
      onSearch(cityInput);
      setCityInput(""); 
    }
  }
  return (
    <div>
      <input
        type="text"
        value={cityInput}
        onKeyPress={handleKeyPress}
        onChange={(e) => setCityInput(e.target.value)}
        placeholder="Enter Location"
        style={{ padding: "10px", width: "250px" }}
      />
     
    </div>
  );
};

export default SearchBar;
