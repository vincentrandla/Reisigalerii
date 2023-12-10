import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import SearchCountries from "./components/SearchCountries";
import TravelContainer from "./pages/HomePage";
import HomePage from "./pages/HomePage";
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
        <Link to="/reisipakkumised/kreeka">
          <TravelContainer
            thumbnailSrc="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4MTYzMTMyMi1pbWFnZS1rd3Z4cHVnZC5qcGc.jpg"
            title="Kreeka"
            description="Hind alates 499€"
          />
        </Link>
        <Link to="/reisipakkumised/egiptus">
          <TravelContainer
            thumbnailSrc="https://images.rawpixel.com/image_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2VzL3dlYnNpdGUvMjAyMi0wNS93azg5MDYzNTA3LWltYWdlLWtwNmFtOXZsLmpwZw.jpg"
            title="Egiptus"
            description="Hind alates 599€"
          />
        </Link>
        <Link to="/reisipakkumised/türgi">
          <TravelContainer
            thumbnailSrc="https://a.cdn-hotels.com/gdcs/production111/d1271/3fc32b60-7f43-4d73-a20f-92b2ec54f9b1.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            title="Türgi"
            description="Hind alates 399€"
          />
        </Link>
        <Link to="/reisipakkumised/maldiivid">
          <TravelContainer
            thumbnailSrc="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3drNjk3MDUzNTktaW1hZ2Uta3A2Y2UzaHAuanBn.jpg"
            title="Maldiivid"
            description="Hind alates 899€"
          />
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="reisipakkumised" element={<TravelOffer />} />
        <Route path="/reisipakkumised/egiptus" element={<TravelOffer />} />
        <Route path="/reisipakkumised/kreeka" element={<TravelOffer />} />
        <Route path="kontakt" element={<Contact />} />
        <Route path="blogi" element={<Blog />} />
        <Route path="reisipakkumised/:country_id" element={<TravelOffer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
