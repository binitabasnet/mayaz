import React from "react";
import { Row, Col } from "react-bootstrap";
import "../Services/services.scss";

const Description = () => {
  return (
    <>
      <div
        className="services mt-3 "
        style={{ backgroundImage: 'url("images/img10.jpg")' }}
      >
        <h1 className="text-center">Our Services</h1>
        <div className="service-icon d-flex justify-content-center align-items-center">
          <Row className="">
            <Col className="col-sm-4">
              <span class="iconify" data-icon="akar-icons:wifi"></span>
              <h5> Wi-Fi</h5>
            </Col>
            <Col className="col-sm-4 ">
              <span class="iconify" data-icon="mdi:account-edit"></span>
              <h5>Reception</h5>
            </Col>
            <Col className="col-sm-4 ">
              <span class="iconify" data-icon="ic:baseline-room-service"></span>
              <h5>Room Services</h5>
            </Col>
          </Row>
        </div>
        <div className="service-icon d-flex justify-content-center align-items-center">
          <Row>
            <Col className="col-sm-4 ">
              <span class="iconify" data-icon="bi:tv"></span>
              <h5> Tv</h5>
            </Col>
            <Col className="col-sm-4 ">
              <span class="iconify" data-icon="fa-solid:car-alt"></span>
              <h5>Parking</h5>
            </Col>
            <Col className="col-sm-4 ">
              <span class="iconify" data-icon="bi:tv"></span>
              <h5> Conference Room</h5>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Description;
