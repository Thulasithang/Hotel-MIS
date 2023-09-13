import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import PaymentForm from "../Components/Payment";
import HotelBookingForm from "../Components/UserInfo";

import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";

import img1 from "../Images/offers.jpg";

export default function ConfirmBooking() {
  const location = useLocation();
  const [customerId, setCustomerId] = useState(null); // State to store the form data

  // Callback function to receive data from HotelBookingForm
  const handleFormData = (data) => {
    setCustomerId(data);
  };

  return (
    <>
      <div
        className="hero-image"
        style={{
          backgroundImage: `url(${img1})`,
          height: "450px",
        }}
      >
        <div
          style={{
            height: "inherit",
            minHeight: "initial",
            width: "100%",
            position: "absolute",
            backgroundColor: "rgba(30, 41, 99, 0.53)",
            padding: "20px 0px 20px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </div>
      <div
        style={{
          width: "95%",
          marginTop: "50px",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row>
          <Col xs={12} sm={12} md={12} lg={8}>
            <Row>
              <HotelBookingForm onFormSubmit={handleFormData} />=
            </Row>
            <Row>
              <PaymentForm
                bookingData={location.state ? location.state.bookingIds : {}}
              />
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <div className="form-block p-3">
              <ThemeProvider theme={themeTyp}>
                <Row>
                  <Col>
                    <Typography variant="NavTyp" sx={{ color: "#030957" }}>
                      Total
                    </Typography>
                  </Col>
                  <Col>
                    <Typography
                      variant="NavTyp"
                      sx={{ color: "#030957", textAlign: "right" }}
                    >
                      LKR {location.state ? location.state.total : 0.0}
                    </Typography>
                  </Col>
                </Row>
              </ThemeProvider>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
