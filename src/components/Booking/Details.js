import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const Details = () => {
  return (
    <>
      <div className="personal-details">
        <Form className="content">
          <FloatingLabel
            controlId="floatingInput"
            label="Full Name"
            className="contact  mb-3"
          >
            <Form.Control type="text" placeholder="Jane Doe" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="contact mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingNumber"
            label="Phone Number"
            className="contact mb-3"
          >
            <Form.Control type="phone" placeholder="Phone" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Message"
            className="contact mb-3"
          >
            <Form.Control as="textarea" placeholder="Leave us a message here" />
          </FloatingLabel>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Details;
