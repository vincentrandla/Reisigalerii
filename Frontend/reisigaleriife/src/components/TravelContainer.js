import React, { useState, useEffect } from "react";

const TravelContainer = ({ id, thumbnailSrc }) => {
  const [travelInfo, setTravelInfo] = useState({
    name: "",
    price: "",
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    fetch(`http://localhost:8080/destination/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data for ID ${id}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("response data ", data);
        setTravelInfo({
          name: data.name,
          price: data.price,
        });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return <p>Error: {error} </p>;
  }

  if (!travelInfo.name || !travelInfo.price) {
    return null;
  }

  return (
    <div className="thumbnail_container">
      <img
        src={thumbnailSrc}
        alt={travelInfo.name}
        className="thumbnail_image"
        loading="lazy"
      />
      <div className="thumbnail_content">
        <h3>{travelInfo.name}</h3>
        <p>
          Hinnad alates <b>{travelInfo.price}€</b>{" "}
        </p>
      </div>
    </div>
  );
};

export default TravelContainer;
