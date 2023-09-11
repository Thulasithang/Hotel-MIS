import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const HotelBookingForm = () => {
  return (
    <div className="container">
      <h2>Hotel Booking</h2>
      <Form>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                required
              />

              
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control as="select" required>
            <option value="" disabled>
              Select your country
            </option>
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            {/* Add more country options */}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="arrivalTime">
          <Form.Label>Arrival Time</Form.Label>
          <Form.Control type="time" required />
        </Form.Group>
        <Form.Group controlId="personalRequest">
          <Form.Label>Personal Request</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your personal request"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default HotelBookingForm;
