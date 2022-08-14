import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import "../Contact/contact.scss";

const Contact = () => {
  return (
    <>
      <div className="contactus mt-5">
        <h2 className="text-center">Get in Touch</h2>
        <p className="text-center">
          Send us a message. We would love to hear from you. Your suggestion are
          always welcomed.
        </p>
        <div className="d-flex justify-content-center align-items-center">
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
              <Form.Control
                as="textarea"
                placeholder="Leave us a message here"
              />
            </FloatingLabel>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Contact;
