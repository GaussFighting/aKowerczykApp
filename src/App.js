import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import Services from './components/Services';
import Blog from './components/Blog';
import Offers from './components/Offers';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/services" element={<Services/>}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/offers" element={<Offers />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/" element={<MainPage />}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
export default App;
