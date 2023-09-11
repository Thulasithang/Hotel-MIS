import React from "react";
import { useState } from "react";

import ImageCarousel from "./Carousal";
import "../Styles/checkout-table.css";

import { Row, Col, Container, Button } from "react-bootstrap";

import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faArrowCircleUp,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";

import img1 from "../Images/349059422.jpeg";
import img2 from "../Images/349059406.jpeg";

const SearchResult = () => {
  const [showMore, setShowMore] = useState(false);
  const [showTax, setShowTax] = useState(false);
  const supImages = [img1, img2];
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={8}>
            <div className="room-type-block">
              <Row>
                <Col>
                  <div
                    className="photo-card"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="photo-background">
                      <ImageCarousel images={supImages} />
                    </div>
                    <div className="photo-details">
                      <ThemeProvider theme={themeTyp}>
                        <Typography
                          variant="PhotoTopic"
                          sx={{ color: "#030957" }}
                        >
                          SUPERIOR ROOM
                        </Typography>
                        <Typography variant="body3">
                          <p style={{ color: "#030957" }}>
                            with mountain views <br />
                            <br />
                            Max occupancy: 2 adults and 1 child
                            <br />
                            Room size: 20 sqm
                            <br />
                            <br />
                            •Non-smoking •Balcony •Air conditioned •Wireless
                            Internet •Free Toiletries
                            {showMore ? (
                              <p style={{ color: "#030957" }}>
                                •Cable/SatelliteTV •Balcony •Bath •Linen and
                                Towels Provided • Iron/Ironing board
                                •Telephone•Television •Tea/Coffee Maker •Fridge
                                •Room Safe •Desk •Hairdryer •Terrace •Mini Bar
                                •Fan •Shower •Linen Provided •Outdoor Setting
                              </p>
                            ) : null}
                            <button
                              className="show-more-btn"
                              onClick={() => setShowMore(!showMore)}
                            >
                              {showMore ? "show less" : "... show more"}
                            </button>{" "}
                          </p>
                        </Typography>
                      </ThemeProvider>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row id="b&b">
                <Col>
                  <div className="room-type">
                    <ThemeProvider theme={themeTyp}>
                      <Button className="discount-btn">
                        <Typography variant="body3">50%</Typography>
                      </Button>
                      <Typography variant="body3" sx={{ color: "#030957" }}>
                        "Resident Rate - Bed & Breakfast"
                      </Typography>
                      <div className="room-type-cost">
                        <Typography
                          variant="body3"
                          sx={{
                            color: "#030957",
                            textDecoration: "line-through",
                          }}
                        >
                          LKR 34,437.13
                        </Typography>
                        <Typography
                          variant="PhotoTopic"
                          sx={{ color: "#030957" }}
                        >
                          LKR 19,437.13
                        </Typography>
                        <Typography variant="body3" sx={{ color: "#030957" }}>
                          Cost for 1 night, 3 guests
                        </Typography>
                      </div>
                      <div className="room-type-btn">
                        <Button className="book-btn">
                          <Typography variant="body3">Select</Typography>
                        </Button>
                      </div>
                    </ThemeProvider>
                  </div>
                </Col>
              </Row>
              <Row id="hb">
                <Col>
                  <div className="room-type">
                    <ThemeProvider theme={themeTyp}>
                      <Button className="discount-btn">
                        <Typography variant="body3">50%</Typography>
                      </Button>
                      <Typography variant="body3" sx={{ color: "#030957" }}>
                        Resident Rate - Half Board
                      </Typography>
                      <div className="room-type-cost">
                        <Typography
                          variant="body3"
                          sx={{
                            color: "#030957",
                            textDecoration: "line-through",
                          }}
                        >
                          LKR 34,437.13
                        </Typography>
                        <Typography
                          variant="PhotoTopic"
                          sx={{ color: "#030957" }}
                        >
                          LKR 22,028.74
                        </Typography>
                        <Typography variant="body3" sx={{ color: "#030957" }}>
                          Cost for 1 night, 3 guests
                        </Typography>
                      </div>
                      <div className="room-type-btn">
                        <Button className="book-btn">
                          <Typography variant="body3">Select</Typography>
                        </Button>
                      </div>
                    </ThemeProvider>
                  </div>
                </Col>
              </Row>
              <Row id="fb">
                <Col>
                  <div className="room-type">
                    <ThemeProvider theme={themeTyp}>
                      <Button className="discount-btn">
                        <Typography variant="body3">50%</Typography>
                      </Button>
                      <Typography variant="body3" sx={{ color: "#030957" }}>
                        Resident Rate - Full Board
                      </Typography>
                      <div className="room-type-cost">
                        <Typography
                          variant="body3"
                          sx={{
                            color: "#030957",
                            textDecoration: "line-through",
                          }}
                        >
                          LKR 34,437.13
                        </Typography>
                        <Typography
                          variant="PhotoTopic"
                          sx={{ color: "#030957" }}
                        >
                          LKR 25,106.29
                        </Typography>
                        <Typography variant="body3" sx={{ color: "#030957" }}>
                          Cost for 1 night, 3 guests
                        </Typography>
                      </div>
                      <div className="room-type-btn">
                        <Button className="book-btn">
                          <Typography variant="body3">Select</Typography>
                        </Button>
                      </div>
                    </ThemeProvider>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <div className="room-type-block">
              <div className="pricing-details">
                <ThemeProvider theme={themeTyp}>
                  <Row>
                    <Col xs={4} sm={4} md={4} lg={4}>
                      <Typography variant="NavTyp" sx={{ color: "#030957" }}>
                        Total
                      </Typography>
                    </Col>
                    <Col className="text-end" xs={8} sm={8} md={8} lg={8}>
                      <Typography variant="NavTyp" sx={{ color: "#030957" }}>
                        LKR 25,106.29
                      </Typography>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col xs={8} sm={8} md={8} lg={8}>
                      <Typography variant="body3" sx={{ color: "#030957" }}>
                        Sat, 26 Aug 23 – Sun, 27 Aug 23
                      </Typography>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} className="text-end">
                      <Typography variant="body3" sx={{ color: "#030957" }}>
                        1 night
                      </Typography>
                    </Col>
                  </Row>
                  <Row>
                    <Typography variant="body3" sx={{ color: "#030957" }}>
                      2 rooms, 6 guests
                    </Typography>
                  </Row>
                  <Row className="check-col">
                    <Col xs={10} sm={10} md={10} lg={10}>
                      <Typography variant="body2" sx={{ color: "#030957" }}>
                        Superior RoomResident Rate - Bed & Breakfast
                      </Typography>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} className="text-center">
                      <Button className="show-more-btn">
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Typography variant="body3" sx={{ color: "#030957" }}>
                        2 Guests 1 nights
                      </Typography>
                    </Col>
                    <Col className="text-end">
                      <Typography variant="body3" sx={{ color: "#030957" }}>
                        LKR 19,437.13
                      </Typography>
                    </Col>
                  </Row>
                  <Row className="check-col">
                    <Col xs={4} sm={4} md={4} lg={4}>
                      <Typography variant="body2" sx={{ color: "#030957" }}>
                        Total
                      </Typography>
                    </Col>
                    <Col className="text-end" xs={8} sm={8} md={8} lg={8}>
                      <Typography variant="body2" sx={{ color: "#030957" }}>
                        LKR 25,106.29
                      </Typography>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Typography variant="body3" sx={{ color: "#030957" }}>
                        Include taxes + fees
                      </Typography>
                    </Col>

                    <Col>
                      <Button
                        className="show-more-btn"
                        onClick={() => setShowTax(!showTax)}
                      >
                        <FontAwesomeIcon
                          icon={showTax ? faArrowCircleUp : faArrowCircleDown}
                        />
                      </Button>
                    </Col>
                    {showTax ? (
                      <Row>
                        <Col>
                          <Typography variant="body2" sx={{ color: "#030957" }}>
                            Service Charge
                          </Typography>
                        </Col>
                        <Col className="text-end">
                          <Typography variant="body2" sx={{ color: "#030957" }}>
                            LKR 2,106.29
                          </Typography>
                        </Col>
                      </Row>
                    ) : null}
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Button
                        className="book-btn"
                        style={{ width: "100%", height: "40px" }}
                      >
                        <Typography variant="body3">Book</Typography>
                      </Button>
                    </Col>
                  </Row>
                </ThemeProvider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchResult;
