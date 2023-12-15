import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import TravelOfferPage from "./pages/TravelOfferPage";
import TravelOffer from "./components/TravelOffer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blogi",
    element: <BlogPage />,
  },
  {
    path: "/kontakt",
    element: <ContactPage />,
  },
  /* { 
    path: "/reisipakkumised",
    element: <TravelOffer />,
  }, */
  {
    path: "/reisipakkumised/*",
    element: (
      <Routes>
        <Route index={<TravelOffer />} />
        <Route path=":country_id" element={<TravelOfferPage />} />
      </Routes>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
