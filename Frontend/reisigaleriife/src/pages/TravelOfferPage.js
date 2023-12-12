import React from "react";
import "./TravelOfferPage.css";
import TravelOffer from "../components/TravelOffer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TravelOfferPage = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="travel_header">
        <img
          className="header_pic"
          src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZhY2F0aW9ufGVufDB8fDB8fHww"
          alt=""
        />
      </div>
      <TravelOffer />
      <Footer />
    </div>
  );
};

export default TravelOfferPage;
