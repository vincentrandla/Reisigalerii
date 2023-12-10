import React from "react";

const TravelContainer = ({ thumbnailSrc, title, description }) => {
  if (!thumbnailSrc || !title || !description) {
    return null;
  }

  return (
    <div className="thumbnail_container">
      <img src={thumbnailSrc} alt={title} className="thumbnail_image" />
      <div className="thumbnail_content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TravelContainer;
