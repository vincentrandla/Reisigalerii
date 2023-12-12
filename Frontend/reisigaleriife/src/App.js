import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import SearchCountries from "./components/SearchCountries";
import TravelContainer from "./components/TravelContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>

      <div className="search">
        <SearchCountries />
      </div>

      <div className="travel_containers">
        <Link to="/reisipakkumised/1/">
          <TravelContainer
            id={1}
            thumbnailSrc="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4MTYzMTMyMi1pbWFnZS1rd3Z4cHVnZC5qcGc.jpg"
            name=""
            price=""
          />
        </Link>
        <Link to="/reisipakkumised/3/">
          <TravelContainer
            id={3}
            thumbnailSrc="https://images.rawpixel.com/image_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2VzL3dlYnNpdGUvMjAyMi0wNS93azg5MDYzNTA3LWltYWdlLWtwNmFtOXZsLmpwZw.jpg"
            name=""
            price=""
          />
        </Link>
        <Link to="/reisipakkumised/2/">
          <TravelContainer
            id={2}
            thumbnailSrc="https://a.cdn-hotels.com/gdcs/production111/d1271/3fc32b60-7f43-4d73-a20f-92b2ec54f9b1.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            name=""
            price=""
          />
        </Link>
        <Link to="/reisipakkumised/4/">
          <TravelContainer
            id={4}
            thumbnailSrc="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3drNjk3MDUzNTktaW1hZ2Uta3A2Y2UzaHAuanBn.jpg"
            name=""
            price=""
          />
        </Link>
        <Link to="/reisipakkumised/5/">
          <TravelContainer
            id={5}
            thumbnailSrc="https://upload.wikimedia.org/wikipedia/commons/c/c9/View_of_Kotor%2C_Montenegro_.jpg"
            name=""
            price=""
          />
        </Link>
        <Link to="/reisipakkumised/6">
          <TravelContainer
            id={6}
            thumbnailSrc="https://a.loveholidays.com/media-library/production/87eed4e1633f6fbb4ed7e92c37aa2d649f21ae3c-3864x1300.png"
            name=""
            price=""
          />
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default App;
