import React, { useEffect } from "react";
import "../Styles/room.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageCarousel from "./Carousal";

import { storage } from "../firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";

import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";

const PhotoCard = ({ type, adult, child, size, description }) => {
  const [images, setImages] = React.useState([]);

  const imageListRef = ref(storage, `images/Hotel/RoomType/${type}/`);

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((url) => {
          setImages((images) => [...images, url]);
        });
      });
    });
  }, []);

  const uniqueImages = [...new Set(images)];
  console.log(uniqueImages);

  return (
    <>
      <div className="container">
        <div className="photocontainer">
          <div className="photo-card">
            <div className="photo-background" enctype="multipart/form-data">
              <ImageCarousel images={uniqueImages} />
            </div>
            <div className="photo-details">
              <ThemeProvider theme={themeTyp}>
                <Typography variant="PhotoTopic">{type}</Typography>
                <Typography variant="body1">
                  <p>
                    with mountain views <br />
                    <br></br>
                    Max occupancy: {adult} adults and {child} child
                    <br />
                    Room size: {size} sqm
                    <br />
                    <br></br>
                    {description}
                  </p>
                </Typography>
              </ThemeProvider>

              <button className="btnbooking">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
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
      </div> */}
    </>
  );
};

export default PhotoCard;
