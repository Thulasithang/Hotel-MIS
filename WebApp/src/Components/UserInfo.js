import React from "react";
import { useState, useEffect, useMemo } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";
import "../Styles/confirm-book.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";

const HotelBookingForm = (props) => {
  const [showDetails, setShowDetails] = useState(true);
  const [detButton, setDetButton] = useState(false);

  const [nic, setNic] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dob, setDob] = useState("");

  const newCustomerData = useMemo(() => {
    return {
      nic: nic,
      firstName: fName,
      lastName: lName,
      email: email,
      phoneNo: phoneNo,
      dateOfBirth: dob,
    };
  }, [nic, fName, lName, email, phoneNo, dob]);

  const [isNewCustomerValid, setIsNewCustomerValid] = useState(false);

  const [existValid, setExistValid] = useState(false);

  const [existCustomerData, setExistCustomerData] = useState({
    nic: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    dateOfBirth: "",
  });

  useEffect(() => {
    const { firstName, lastName, email, nic, phoneNo, dateOfBirth } =
      newCustomerData;

    // Check if any of the values are undefined or empty
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      nic === "" ||
      phoneNo === "" ||
      dateOfBirth === ""
    ) {
      setIsNewCustomerValid(false);
    } else {
      setIsNewCustomerValid(true);
    }
  }, [newCustomerData]);

  const handleSubmit = () => {
    // Create the data object to send in the POST request
    const requestBody = {
      nicNumber: nic,
      firstName: fName,
      lastName: lName,
      dateOfBirth: dob,
      phoneNo: phoneNo,
      email: email,
    };

    // Define the URL and headers
    const url = "http://localhost:8080/customer/submit-customer";
    const headers = {
      "Content-Type": "application/json",
    };

    // Perform the POST request using fetch
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.ok) {
          // Successful response, handle as needed
          console.log("POST request successful");
          setShowDetails(false);
          setDetButton(true);
          return response.json();
        } else {
          // Handle error response
          console.error("POST request failed");
          // You can add additional error handling here
        }
      })
      .then((data) => {
        props.onFormSubmit(data.customerId);
      })
      .catch((error) => {
        // Handle network or other errors
        console.error("Error:", error);
      });
  };
  const handleNicInputChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length === 9) {
      // Make a GET fetch call to the server
      fetch(`http://localhost:8080/customer/view-customer?nicNo=${inputValue}`)
        .then((response) => response.json())
        .then((data) => {
          // Update the customerData state with the response
          setExistCustomerData({
            nic: data.nicNumber,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNo: data.phoneNo,
            dateOfBirth: data.dateOfBirth,
          });
          setFName(data.firstName);
          setLName(data.lastName);
          setEmail(data.email);
          setPhoneNo(data.phoneNo);
          setDob(data.dateOfBirth);

          setExistValid(true);
          // console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Reset the customerData state if the input is not 9 digits
      setExistCustomerData(null);
    }
    setNic(inputValue);
  };

  // console.log(existCustomerData);
  // console.log(newCustomerData);
  return (
    <div className="container">
      <div className="form-block p-4 ">
        <Row>
          <Col xs={10} sm={10} md={10} lg={10}>
            <ThemeProvider theme={themeTyp}>
              <Typography variant="PhotoTopic1" sx={{ color: "#030957" }}>
                1. Submit Your details
              </Typography>
            </ThemeProvider>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2}>
            <Button
              className="show-more-btn"
              onClick={() => setShowDetails(!showDetails)}
              disabled={detButton}
            >
              <FontAwesomeIcon
                icon={showDetails ? faArrowCircleUp : faArrowCircleDown}
              />
            </Button>
          </Col>
        </Row>
        {showDetails && (
          <div>
            <Form className="p-1" style={{ borderTop: "1px solid #030957 " }}>
              <Row className="form-row">
                <Col xs={12} sm={12} md={12} lg={6}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your first name"
                      required
                      onChange={(e) => setFName(e.target.value)}
                      value={
                        existValid && existCustomerData
                          ? existCustomerData.firstName
                          : fName
                      }
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      onChange={(e) => setLName(e.target.value)}
                      value={
                        existValid && existCustomerData
                          ? existCustomerData.lastName
                          : lName
                      }
                      type="text"
                      placeholder="Enter your last name"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="form-row">
                <Col xs={12} sm={12} md={12} lg={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={
                        existValid && existCustomerData
                          ? existCustomerData.email
                          : email
                      }
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                  <Form.Group controlId="NIC">
                    <Form.Label>NIC No</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your NIC number"
                      required
                      onChange={handleNicInputChange}
                      value={nic}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="form-row">
                <Col xs={12} sm={12} md={12} lg={6}>
                  <Form.Group controlId="arrivalTime">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      value={
                        existValid && existCustomerData
                          ? existCustomerData.phoneNo
                          : phoneNo
                      }
                      onChange={(e) => setPhoneNo(e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                  <Form.Group controlId="arrivalTime">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      onChange={(e) => setDob(e.target.value)}
                      value={
                        existValid && existCustomerData
                          ? existCustomerData.dateOfBirth
                          : dob
                      }
                      placeholder="Enter your date of birth"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Row style={{ justifyContent: "flex-end" }}>
              <Button
                className="book-btn"
                type="button"
                onClick={handleSubmit}
                disabled={!isNewCustomerValid}
              >
                <ThemeProvider theme={themeTyp}>
                  <Typography variant="button">Submit</Typography>
                </ThemeProvider>
              </Button>
            </Row>
          </div>
        )}
        ;
      </div>
    </div>
  );
};

export default HotelBookingForm;
