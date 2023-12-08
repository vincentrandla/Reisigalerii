import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import TravelOffer from "./pages/TravelOffer";
import SingleTravelOffer from "./pages/SingleTravelOffer";
import rg_logo from "./pictures/rg_logo.png";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Link to="/avaleht">
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

      <Routes>
        <Route path="avaleht" element={<HomePage />} />
        <Route path="reisipakkumised" element={<TravelOffer />} />
        <Route path="kontakt" element={<Contact />} />
        <Route
          path="reisipakkumised/:country_id"
          element={<SingleTravelOffer />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
