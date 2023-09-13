import React from "react";
import { useLocation } from "react-router-dom";

const BookingSuccessMessage = () => {
  const location = useLocation();
  const bookingData = location.state ? location.state.bookingData : {};
  return (
    <div>
      <h2>Booking Successfully Placed</h2>
      <p>Your Booking ID: {bookingData}</p>
    </div>
  );
};

export default BookingSuccessMessage;
