import React from "react";
import { Carousel } from "react-bootstrap";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel
      style={{
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="c-image" src={image} alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
