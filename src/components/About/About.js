import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../About/about.scss";

const About = () => {
  return (
    <>
      <div className="desc">
        <Row className="about-us  m-5">
          <Col>
            <div className="aboutus-img p-3">
              <img src="/images/img6.jpg" alt="" />
            </div>
          </Col>
          <Col className="about p-5">
            <h2>ABOUT US</h2>
            <h3>Your holiday starts here...</h3>
            <p>
              Located at the hills of Dhulikhel, Mayaz Resort is a perfect
              destination to those looking for relaxation away from the chaos of
              the city.
            </p>
            <Link className="text-white " to="#">
              <Button>Read More..</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default About;
