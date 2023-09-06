import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/experience.css";

import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faMountainSun,
  faUtensils,
  faSnowflake,
  faHotTubPerson,
  faBicycle,
} from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";

const ExpComp = () => {
  return (
    <div
      style={{
        backgroundColor: "#030957",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: "20px 0px 10px 0px #121320",
      }}
    >
      <div
        className="d-flex align-items-center order-5"
        style={{
          padding: "40px 0px 40px 0px",
        }}
      >
        <ThemeProvider theme={themeTyp}>
          <Container>
            <Row>
              <Col sm={2} className="text-center">
                <FontAwesomeIcon icon={faBed} className="exp-icon" /> <br />
                <Typography variant="NavTyp">42 Rooms</Typography>
              </Col>
              <Col sm={2} className="text-center">
                <Typography variant="NavTyp">
                  <FontAwesomeIcon icon={faMountainSun} className="exp-icon" />{" "}
                  <br />
                  Beautiful Mountain Views
                </Typography>
              </Col>
              <Col sm={2} className="text-center">
                <Typography variant="NavTyp">
                  <FontAwesomeIcon icon={faUtensils} className="exp-icon" />{" "}
                  <br />
                  Restaurant, Bar & Terrace
                </Typography>
              </Col>
              <Col sm={2} className="text-center">
                <FontAwesomeIcon icon={faSnowflake} className="exp-icon" />{" "}
                <br />
                <Typography variant="NavTyp">AC Fitted</Typography>
              </Col>
              <Col sm={2} className="text-center">
                <FontAwesomeIcon icon={faHotTubPerson} className="exp-icon" />{" "}
                <br />
                <Typography variant="NavTyp">Hot Water</Typography>
              </Col>
              <Col sm={2} className="text-center">
                <FontAwesomeIcon icon={faBicycle} className="exp-icon" /> <br />
                <Typography variant="NavTyp">
                  Cycling & Hiking Excursions
                </Typography>
              </Col>
            </Row>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default ExpComp;
