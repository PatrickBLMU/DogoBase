import React from "react";

const SaveBreed = ({ dogData }) => {
  const saveDogName = async () => {
    if (!dogData || !dogData.breeds || dogData.breeds.length === 0) {
      alert("No dog breed information available to save.");
      return;
      }
    }

  return (
    <div>
      <button onClick={saveDogName}>
        Save Breed Name
      </button>
    </div>
  );
};

export default SaveBreed;



