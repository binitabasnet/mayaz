import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Rooms from "./pages/Rooms";
import Gallery from "./pages/Gallery";
import Details from "./components/Booking/Details";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<Aboutus />} />
        <Route exact path="/contactus" element={<Contact />} />
        <Route exact path="/rooms" element={<Rooms />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
