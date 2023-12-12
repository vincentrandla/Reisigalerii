import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "./StarRating";

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

  const getThumbnail = (countryId, hotelId) => {
    try {
      console.log(`Loading thumbnail for hotel ${hotelId}`);
      const imagesContext = require.context(
        "../pictures",
        false,
        /\.(jpg|jpeg|png)$/
      );
      const thumbnail = imagesContext(`./${countryId}_${hotelId}.jpg`);
      console.log("Thumbnail loaded:", thumbnail);
      return thumbnail;
    } catch (error) {
      console.error("Error loading thumbnail:", error);
      return null;
    }
  };

  return (
    <div className="offer_containers">
      <div className="hotel_container">
        {hotels.map((hotel) => (
          <div className="hotels_general" key={hotel.id}>
            <div className="thumbnail">
              <img
                src={getThumbnail(country_id, hotel.id)}
                alt={`Thumbnail for ${hotel.name}`}
              />
            </div>
            <h3 className="hotel_name">
              {hotel.name}
              <StarRating rating={hotel.rating} />
            </h3>
            <div className="hotel_info">
              <div className="hotel_location_price">
                <li className="hotel_location">{hotel.location}</li>
                <li className="hotel_price">{hotel.basePrice}€ /Inimene</li>
              </div>
              <li className="hotel_description">{hotel.description}</li>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelOffer;
