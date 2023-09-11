import React from "react";
import "../Styles/room.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageCarousel from "./Carousal";

import img1 from "../Images/349059422.jpeg";
import img2 from "../Images/349059406.jpeg";

import img3 from "../Images/348610555.jpeg";
import img4 from "../Images/348610551.jpeg";

import img5 from "../Images/349060691.jpeg";
import img6 from "../Images/348610582.jpeg";

import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";

const PhotoCard = () => {
  const supImages = [img1, img2];
  const kingImages = [img3, img4];
  const famImages = [img5, img6];

  return (
    <>
      <div className="container">
        <div className="photocontainer">
          <div className="photo-card">
            <div className="photo-background">
              <ImageCarousel images={supImages} />
            </div>
            <div className="photo-details">
              <ThemeProvider theme={themeTyp}>
                <Typography variant="PhotoTopic">SUPERIOR ROOM</Typography>
                <Typography variant="body1">
                  <p>
                    with mountain views <br />
                    <br></br>
                    Max occupancy:2 adults and 1 child
                    <br />
                    Room size: 20 sqm
                    <br />
                    <br></br>
                    Stunning views, a private balcony, comfy beds, tea/coffee
                    facilities and all standard amenities included in these cosy
                    rooms.
                  </p>
                </Typography>
              </ThemeProvider>

              <button className="btnbooking">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="photocontainer">
          <div className="photo-card">
            <div className="photo-background">
              <ImageCarousel images={kingImages} />
            </div>
            <div className="photo-details">
              <ThemeProvider theme={themeTyp}>
                <Typography variant="PhotoTopic">KING SUITE</Typography>
                <Typography variant="body1">
                  <p>
                    with Hanthana mountain views
                    <br />
                    <br></br>
                    Max occupancy: 2 adults and 1 child
                    <br />
                    Room size: 25 sqm
                    <br />
                    <br></br>
                    Sweeping views of the majestic Hanthana mountains greet you
                    as soon as you enter the Suite. Equipped with a panoramic
                    seating area, and dining area our Suites are ideal for
                    couples that yearn that extra privacy and indulgence.
                  </p>
                </Typography>
              </ThemeProvider>

              <button className="btnbooking">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="photocontainer">
          <div className="photo-card">
            <div className="photo-background">
              <ImageCarousel images={famImages} />
            </div>
            <div className="photo-details">
              <ThemeProvider theme={themeTyp}>
                <Typography variant="PhotoTopic">FAMILY SUITE</Typography>
                <Typography variant="body1">
                  <p>
                    with mountain views
                    <br />
                    <br></br>
                    Max occupancy: 4 pax
                    <br />
                    Room size: 41 sqm
                    <br />
                    <br></br>
                    Our biggest rooms that are ideal for families or groups of
                    friends. Take in mesmerising views of the mountains from the
                    balcony while enjoying the extra space.
                  </p>
                </Typography>
              </ThemeProvider>

              <button className="btnbooking">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoCard;
