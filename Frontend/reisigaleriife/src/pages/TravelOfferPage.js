import React from "react";
import "./TravelOfferPage.css";
import TravelOffer from "./TravelOffer";
import SingleTravelOffer from "./SingleTravelOffer";
import { Outlet } from "react-router-dom";

const TravelOfferPage = () => {
  return (
    <div>
      <h1>Travel Offers</h1>
      <Outlet />
    </div>
  );
};

export default TravelOfferPage;
