import React from "react";

export const UserRating = ({ rate }) => {
  // Function to render stars based on the rating
  const renderStars = () => {
    const stars = [];
    const rating = parseFloat(rate); // Convert rate to float if it's a string
    // Loop to create each star
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-yellow-400">&#9733;</span>); // Full star
      } else {
        stars.push(
          <span key={i} className="text-yellow-400">
            &#9734;
          </span>
        ); // Empty star
      }
    }
    return stars;
  };

  return (
    <div>
      {/* Render stars */}
      {renderStars()}
    </div>
  );
};

