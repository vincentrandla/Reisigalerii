import "./App.css";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import SearchCountries from "./components/SearchCountries";
import TravelContainer from "./pages/HomePage";
import HomePage from "./pages/HomePage";
import TravelOfferPage from "./pages/TravelOfferPage";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import TravelOffer from "./pages/TravelOffer";
import SingleTravelOffer from "./pages/SingleTravelOffer";
import Blog from "./pages/Blog";
import rg_logo from "./pictures/rg_logo.png";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Link to="/">
          <img className="rg_logo" src={rg_logo} alt="Reisigalerii Logo" />
        </Link>

        <div className="header_btns">
          <Link to="/reisipakkumised">
            <button className="reisi_btn">Reisipakkumised</button>
          </Link>

          <button className="blogi_btn">Blogi</button>

          <Link to="/kontakt">
            <button className="contact_btn">Kontakt</button>
          </Link>
        </div>
      </div>

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
        <Link to="/reisipakkumised/5">
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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/reisipakkumised/*"
          element={
            <TravelOfferPage>
              <Route index element={<TravelOffer />} />
              <Route path=":country_id" element={<SingleTravelOffer />} />
            </TravelOfferPage>
          }
        />
        <Route path="kontakt" element={<Contact />} />
        <Route path="blogi" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="footer">
        <div className="social_icons">
          <a
            href="https://www.facebook.com/Reisigalerii"
            target="blank"
            className="facebook_link"
          >
            <img
              className="fb_image"
              src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Facebook_logo_2014_wiki_blue.gif"
              alt="FB Logo"
            />
          </a>
          <a
            href="https://github.com/vincentrandla"
            target="blank"
            className="github_logo"
          >
            <img
              className="github_image"
              src="https://cdn.iconscout.com/icon/free/png-256/free-github-163-761603.png"
              alt="Github Logo"
            />
          </a>
        </div>
        <p className="copyright_p">
          Copyright ©2023 Vincent Randla <br />
          Reisigalerii
        </p>
      </footer>
    </div>
  );
}

export default App;
