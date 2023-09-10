import React from "react";
import "../Styles/Pricing-Table.css";
import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import img1 from "../Images/restaurant.jpg";

const Restaurant = () => {
  return (
    <div
      className="hero-image restaurant"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundColor: "#030957",
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
          backgroundColor: "rgba(30, 41, 99, 0.35)",
          padding: "10px 30px 10px 30px",
        }}
      >
        <div
          className="d-flex  flex-column align-items-center order-5"
          style={{
            padding: "40px 0px 40px 0px",
          }}
        >
          <ThemeProvider theme={themeTyp}>
            <Typography variant="H1" color={"white"} textAlign={"center"}>
              Experience a Delicious Culinary Journey
            </Typography>
            <Typography variant="body3" textAlign={"center"}>
              Welcome to our Hotel's Exquisite Dining Experience! Our restaurant
              caters to both our esteemed hotel guests and discerning outsiders,
              offering a delectable culinary journey that transcends boundaries.
              For our cherished hotel residents, we've streamlined the dining
              process. Hotel stayers can enjoy the convenience of reserving a
              table right from the comfort of their room by using their unique
              room password and room number. It's a hassle-free way to secure
              your spot and ensure a delightful dining experience. As for our
              cherished guests from outside, securing a table is just a phone
              call away. Simply provide us with your telephone number, and we'll
              be pleased to reserve a table for you. At W Hotels, we pride
              ourselves on making every dining experience seamless, from
              reservation to the last delectable bite.
            </Typography>
            <br></br>
            <Typography variant="body2" textAlign={"center"}>
              Join us in savoring culinary delights that know no boundaries
            </Typography>
            <Link to="/reserve-table">
              <button className="btnreserve">
                <Typography variant="button">Reserve Now</Typography>
              </button>
            </Link>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
