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

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/offers">
            <Offers />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Routes>


      </div>
    </Router>
  );
}
export default App;
