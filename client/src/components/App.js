import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Works from "./Works";
import Gallery from "./Gallery";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import FeedBackForm from "./FeedBackForm";
import Fourohfour from "./Fourohfour";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Works" element={<Works />} />
        <Route exact path="/Gallery" element={<Gallery />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/FeedBackForm" element={<FeedBackForm />} />

        <Route path="*" element={<Fourohfour />} />
      </Routes>
    </Router>
  );
}

export default App;
