import React, { useState } from "react";
import { Container, Navbar, Button, Nav } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Navbar/navbar.scss";
import CarouselComponent from "../Carousel";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  const carouselImages = [
    {
      url: "/images/img1.jpg",
      name: "First",
    },
    {
      url: "/images/img2.jpg",
      name: "Second",
    },
    {
      url: "/images/img3.jpg",
      name: "Third",
    },
  ];

  return (
    <div className="navbar" style={{ height: "70vh", position: "relative" }}>
      <div className="header">
        <Navbar
          expand="lg"
          style={{ backgroundColor: "rgba(255,255,255,0)", zIndex: 2 }}
        >
          <Container>
            <Navbar.Brand href="#home">
              <div className="logo-img">
                <img src="/images/logos.png" alt="logo img" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <div>
              <Navbar.Collapse id="basic-navbar-nav" className="m-auto">
                <Nav className="nav-link">
                  <Nav.Link href="/" className="text-white">
                    HOME
                  </Nav.Link>
                  <Nav.Link href="/aboutus" className="text-white">
                    ABOUTUS
                  </Nav.Link>
                  <Nav.Link href="/gallery" className="text-white">
                    GALLERY
                  </Nav.Link>
                  <Nav.Link href="/rooms" className="text-white">
                    ROOMS
                  </Nav.Link>
                  <Nav.Link href="/book" className="text-white">
                    BOOK
                  </Nav.Link>
                  <Nav.Link href="/contactus" className="text-white">
                    CONTACT
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
        <CarouselComponent images={carouselImages} />
      </div>
      <div className="book">
        <div className="search-contents">
          <div>
            <div className="row search-your-details p-2">
              <div className="col-lg-3 col-md-3">
                <div className="search-your-rooms mt-20">
                  <h3 className="hidden-xs hidden-sm">Book</h3>
                  <h2 className="hidden-xs hidden-sm">
                    Your <span>Rooms</span>
                  </h2>
                  {/* <h2 className="hidden-lg hidden-md">Book Your <span>Rooms</span></h2> */}
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="row m-1 ">
                  <div className="col-md-4 col-sm-4 col-xs-6 ">
                    <DatePicker
                      selected={checkInDate}
                      placeholderText="Check-in"
                      minDate={new Date()}
                      onChange={handleCheckInDate}
                    />
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-6">
                    <div className="form-group">
                      <DatePicker
                        selected={checkOutDate}
                        placeholderText="Check-out"
                        minDate={checkInDate}
                        onChange={handleCheckOutDate}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-6">
                    <div className="form-group">
                      <select
                        name="room"
                        id="rooms"
                        className="selectpicker search-fields form-control-2"
                      >
                        <option value="0">Room</option>
                        <option value="1">Standard Double and Twin</option>
                        <option value="2">Standard Twin Bed</option>
                        <option value="3">Standard Triple</option>
                        <option value="4">Budget Double orTwin</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-6">
                    <div className="form-group">
                      <select
                        name="adult"
                        id="adults"
                        className="selectpicker search-fields form-control-2"
                      >
                        <option value="0">Adult</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value=">10">&gt;10</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-6">
                    <div className="form-group">
                      <select
                        name="child"
                        id="childs"
                        className="selectpicker search-fields form-control-2"
                      >
                        <option value="0">Child</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value=">5">&gt;5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-6">
                    <div className="form-group">
                      <Link to="/details">
                        <input
                          type="submit"
                          name="select"
                          value="Select Room"
                          id="selectroom"
                          className="search-button btn-theme select-room-button"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
