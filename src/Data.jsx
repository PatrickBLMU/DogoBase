import React, { useState } from "react";

const RandomDog = () => {
  const [dogData, setDogData] = useState(null);
  const API_KEY = "live_2iqVJSlCm46rdVuMOHlTzwSEzOxDOeatjIMREG1rJcodrHW9RaiSod64LeM1EKbf";
  const API_URL = "https://api.thedogapi.com/v1/images/search";

  const fetchDogData = async () => {
    try {
      const response = await fetch(`${API_URL}?api_key=${API_KEY}`, {
        headers: {
          "x-api-key": API_KEY,
        },
      });

      const [data] = await response.json();
      setDogData(data);
    } catch (error) {
      console.error("Error fetching dog data:", error);
      setDogData(null);
    }
  };

  return (
    <div classname="dataholder">
      <button classname="mainbutton" onClick={fetchDogData}>Fetch Random Dog</button>
      {dogData ? (
        <div>
          <img src={dogData.url} alt="Random Dog" />
          {dogData.breeds && dogData.breeds.length > 0 ? (
            <article>
              <h2>Breed Information</h2>
              <p>Name: {dogData.breeds[0].name}</p>
              <p>Temperament: {dogData.breeds[0].temperament}</p>
              <p>Life Span: {dogData.breeds[0].life_span}</p>
              <p>Weight: {dogData.breeds[0].weight.metric} kg</p>
            </article>
          ) : (
            <p>No additional breed information available.</p>
          )}
        </div>
      ) : (
        <p>Click the button to fetch random dog information.</p>
      )}
    </div>
  );
};

export default RandomDog;