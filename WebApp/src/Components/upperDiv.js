import React from "react";
import img1 from "../Images/offers.jpg";

function upperDiv() {
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
      ></div>
    </>
  );
}

export default upperDiv;
