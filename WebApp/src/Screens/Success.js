import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";
import "../Styles/success.css";
import Upperdiv from "../Components/upperDiv";
import img1 from "../Images/success.jpg";
const BookingSuccessMessage = () => {
  const location = useLocation();
  const bookingIds = location.state ? location.state.bookingIds : {};

  const history = useNavigate();

  // Prevent users from going back to this page
  useEffect(() => {
    const handleBackButton = (e) => {
      e.preventDefault();
      history.push("/"); // You can specify where to redirect users
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [history]);
  // const bookingData = location.state ? location.state.bookingData : {};
  return (
    <>
      <div className="nav-fill"></div>
      <div className="book-confirm">
        <img className="success-img" src={img1} />
        <ThemeProvider theme={themeTyp}>
          <Typography variant="H1" sx={{ color: "#030957" }}>
            Booking Successfully Placed !
          </Typography>
          <Typography variant="PhotoTopic1" sx={{ color: "#030957" }}>
            Your Booking ID: {bookingIds}
          </Typography>
        </ThemeProvider>
      </div>
    </>
  );
};

export default BookingSuccessMessage;
