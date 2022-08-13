import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Offers from "./components/Offers";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import OfferPage from "./components/OfferPage";
import SocialActivity from "./components/SocialActivity";
import Activity from "./components/Activity";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div style={{ height: "72px" }}> </div>
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/offer/:id" element={<OfferPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/socialactivity" element={<SocialActivity />} />
          <Route path="/socialactivity/:id" element={<Activity />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
