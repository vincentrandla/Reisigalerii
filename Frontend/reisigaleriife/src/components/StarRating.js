import React from "react";
import PropTypes from "prop-types";

const StarRating = ({ rating, totalStars = 5 }) => {
  const filledStars = Math.round(rating * totalStars) / totalStars;
  const starArray = Array.from({ length: totalStars });

  return (
    <div className="star_rating">
      {starArray.map((_, index) => (
        <span
          key={index}
          className={`star ${index + 1 <= filledStars ? "filled" : ""}`}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalStars: PropTypes.number,
};

export default StarRating;
