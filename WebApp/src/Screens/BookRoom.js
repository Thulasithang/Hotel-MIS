import React from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import SearchResult from "../Components/SearchResult";
import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";

import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Pricing-Table.css";

import img1 from "../Images/offers.jpg";

export default function BookRoom() {
  const location = useLocation();
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
        >
          <ThemeProvider theme={themeTyp}>
            <SearchBar
              selectedValues={location.state ? location.state.form : {}}
            />
          </ThemeProvider>
        </div>
      </div>
      <div
        style={{
          width: "95%",
          marginTop: "30px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchResult
          roomData={location.state ? location.state.Roomdata : {}}
          selectedValues={location.state ? location.state.form : {}}
        />
      </div>
    </>
  );
}
