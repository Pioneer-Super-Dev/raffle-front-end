import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/landing/Landing";
import Mint from "./components/mint/Mint";
import "animate.css";
import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/mycss.css";
import "./assets/css/Social-Icons.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mint" element={<Mint />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
