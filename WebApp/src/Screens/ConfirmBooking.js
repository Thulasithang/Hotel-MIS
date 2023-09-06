import React from "react";
import PaymentForm from "../Components/Payment";
import HotelBookingForm from "../Components/UserInfo";

export default function ConfirmBooking() {
  return (
    <>
      <HotelBookingForm />
      <PaymentForm />
    </>
  );
}
