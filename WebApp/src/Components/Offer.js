import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Pricing-Table.css";

import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";

import img1 from "../Images/offers.jpg";

const HeroComponent = () => {
  return (
    <div
      className="hero-image"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "inherit",
          minHeight: "initial",
          width: "100%",
          position: "absolute",
          left: 0,
          backgroundColor: "rgba(30, 41, 99, 0.53)",
        }}
      >
        <div
          className="d-flex align-items-center order-5"
          style={{
            padding: "40px 0px 40px 0px",
          }}
        >
          <Container>
            <Row>
              <Col sm={12} md={12}>
                <ThemeProvider theme={themeTyp}>
                  <Typography
                    variant="PhotoTopic"
                    color={"white"}
                    textAlign={"left"}
                  >
                    RESIDENT OFFER
                  </Typography>
                  <Typography variant="body3" textAlign={"left"}>
                    Exclusively for Sri Lankan residents. Stay until 30th
                    September 2023. Limited availability.
                  </Typography>

                  <br />
                </ThemeProvider>
              </Col>
            </Row>

            <Row>
              <Col sm={4}>
                <ThemeProvider theme={themeTyp}>
                  <ListGroup className="list-group">
                    <ListGroup.Item
                      className="heading"
                      style={{ background: "#030957" }}
                    >
                      <Typography variant="PhotoTopic">
                        Bed & <br />
                        Breakfast
                      </Typography>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Typography variant="OfferPrice"> Rs 11 500</Typography>

                      <Typography variant="body2" sx={{ color: "#030957" }}>
                        Include Breakfast <br /> For 2 Adults
                        <br />
                        <br />{" "}
                      </Typography>
                      <Typography variant="body3" sx={{ color: "#030957" }}>
                        Free wifi, daily housekeeping, free parking, daily
                        replinshment of tea/coffee/water in-room
                      </Typography>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <button className="btnbooking">
                        <Typography variant="button">Book Now</Typography>
                      </button>
                    </ListGroup.Item>
                  </ListGroup>
                </ThemeProvider>
              </Col>

              {/* Repeat for other columns */}

              <Col sm={4}>
                <ThemeProvider theme={themeTyp}>
                  <ListGroup className="list-group">
                    <ListGroup.Item
                      className="heading"
                      style={{ background: "#030957" }}
                    >
                      <Typography variant="PhotoTopic">
                        Half <br />
                        Board
                      </Typography>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Typography variant="OfferPrice"> Rs 15 500</Typography>

                      <Typography variant="body2" sx={{ color: "#030957" }}>
                        Include Dinner & Breakfast <br />
                        For 2 Adults
                        <br />
                        <br />{" "}
                      </Typography>
                      <Typography variant="body3" sx={{ color: "#030957" }}>
                        Free wifi, daily housekeeping, free parking, daily
                        replinshment of tea/coffee/water in-room
                      </Typography>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <button className="btnbooking">
                        <Typography variant="button">Book Now</Typography>
                      </button>
                    </ListGroup.Item>
                  </ListGroup>
                </ThemeProvider>
              </Col>

              {/* Repeat for other columns */}
              <Col sm={4}>
                <ThemeProvider theme={themeTyp}>
                  <ListGroup className="list-group">
                    <ListGroup.Item
                      className="heading"
                      style={{ background: "#030957" }}
                    >
                      <Typography variant="PhotoTopic">
                        Full <br />
                        Board
                      </Typography>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Typography variant="OfferPrice"> Rs 18 500</Typography>

                      <Typography variant="body2" sx={{ color: "#030957" }}>
                        Include Breakfast, Lunch & Dinner <br />
                        For 2 Adults
                        <br />
                        <br />{" "}
                      </Typography>
                      <Typography variant="body3" sx={{ color: "#030957" }}>
                        Free wifi, daily housekeeping, free parking, daily
                        replinshment of tea/coffee/water in-room
                      </Typography>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <button className="btnbooking">
                        <Typography variant="button">Book Now</Typography>
                      </button>
                    </ListGroup.Item>
                  </ListGroup>
                </ThemeProvider>
              </Col>

              {/* Repeat for other columns */}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
