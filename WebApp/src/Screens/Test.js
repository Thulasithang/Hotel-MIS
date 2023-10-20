import React, { useState } from "react";
import ipaddress from "../config";
import { Form, Row, Col, Alert } from "react-bootstrap";
import { validateNICWithBirthdate } from "../Utils/nicValidator";

const AddRoomType = () => {
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [matchResult, setMatchResult] = useState(false);

  const handleNicInputChange = (e) => {
    setNic(e.target.value);
    console.log(e.target.value);
  };

  const handleDoBChange = (e) => {
    setDob(e.target.value);
    console.log(e.target.value);
  };

  let nicr = "200077300581";
  let dobr = "2000-09-21";

  const nicc = "200008102868";
  const dobc = "2000-03-21";

  const check = () => {
    const match = validateNICWithBirthdate(nicc, dobc);
    setMatchResult(match);
    console.log(matchResult);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Row className="form-row">
        <Form.Group controlId="NIC">
          <Form.Label>NIC No</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your NIC number"
            required
            onChange={handleNicInputChange}
            value={nic}
          />
          {matchResult && (
            <Alert variant="danger">Please enter a valid NIC</Alert>
          )}
        </Form.Group>
      </Row>
      <Row className="form-row">
        <Form.Group controlId="arrivalTime">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            onChange={handleDoBChange}
            value={dob}
            placeholder="Enter your date of birth"
            required
          />
        </Form.Group>
      </Row>
      <button onClick={check}>check</button>
    </div>
  );
};

export default AddRoomType;
