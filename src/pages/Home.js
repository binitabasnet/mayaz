import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Rooms from "../components/Rooms/Rooms";
import Footer from "../components/Footer/Footer";
import Description from "../components/Services/Description";
import About from "../components/About/About";
import Review from "../components/Review";

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Rooms />
      <Description />
      <Review />
      <Footer />
    </>
  );
};

export default Home;
