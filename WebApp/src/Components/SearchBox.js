import * as React from "react";
import "../Styles/searchbox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";

import SearchBar from "./SearchBar";

export default function SearchBox() {
  return (
    <>
      <section className="header">
        <div
          className="header-container"
          style={{
            paddingTop: "200px",
            paddingBottom: "175px",
          }}
        >
          <div className="wording">
            <div className="col-md-6 offset-md-3">
              <h1 className="text-center" style={{ color: "#ffffff" }}>
                <ThemeProvider theme={themeTyp}>
                  <Typography variant="H1">
                    Find your perfect place to stay
                  </Typography>
                </ThemeProvider>
              </h1>
              <p className="text-center">
                <ThemeProvider theme={themeTyp}>
                  <Typography variant="body3">
                    When the mountains are calling, Hanthana is like nothing on
                    earth. Our Resort is situated at the front door of this
                    majestic range, steeped in pioneering spirit, a refined
                    cultural touch, and legendary Sri Lankan hospitality.{" "}
                  </Typography>
                </ThemeProvider>
              </p>
            </div>
          </div>
          <ThemeProvider theme={themeTyp}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "-50px 0px 0px 0px",
              }}
            >
              <SearchBar />
            </div>
          </ThemeProvider>
        </div>
      </section>
    </>
  );
}
