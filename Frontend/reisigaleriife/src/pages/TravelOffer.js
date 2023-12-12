import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./TravelOfferPage.css";

const TravelOffer = () => {
  const { country_id } = useParams();
  console.log("country_id", country_id);
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching data for country_id: ", country_id);
    if (!country_id) {
      navigate("/");
    } else {
      fetch(`http://localhost:8080/hotels?destinationId=${country_id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Backend response: ", data);
          setHotels(data);
        })
        .catch((error) => console.error("Error fetching hotel data: ", error));
    }
  }, [country_id, navigate]);

  return (
    <div className="offer_containers">
      <div className="filters"></div>

      <div className="offer_containers">
        {hotels.map((hotel) => (
          <div key={hotel.id}>
            <h3>{hotel.name}</h3>
            <h4>{hotel.basePrice}</h4>
            <h6>{hotel.location}</h6>
            <p>{hotel.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelOffer;
