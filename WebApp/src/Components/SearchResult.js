import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import ipaddress from "../config";

import { storage } from "../firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";

import ImageCarousel from "./Carousal";
import "../Styles/checkout-table.css";

import { convertDateToFormat } from "../Utils/dateUtil";

import { Row, Col, Container, Button } from "react-bootstrap";

import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faArrowCircleUp,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";

import img1 from "../Images/349059422.jpeg";
import img2 from "../Images/349059406.jpeg";

const RoomTypeImages = ({ roomType }) => {
  const [images, setImages] = useState([]);
  const imageListRef = ref(storage, `images/Hotel/RoomType/${roomType}/`);

  listAll(imageListRef).then((res) => {
    res.items.forEach((itemRef) => {
      getDownloadURL(itemRef).then((url) => {
        setImages((images) => [...images, url]);
        console.log(url);
      });
    });
  });
  const uniqueImages = [...new Set(images)];
  return uniqueImages;
};

const SearchResult = (props) => {
  const roomTypeImages = {};

  // Iterate over the room data to fetch and store images
  props.roomData.forEach((roomTypeData) => {
    const roomType = roomTypeData.roomType;

    roomTypeImages[roomType] = <RoomTypeImages roomType={roomType} />;
  });

  // Now, roomTypeImages contains components for each room type with unique images
  // console.log(roomTypeImages);

  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [showTax, setShowTax] = useState(false);
  const [total, setTotal] = useState("0.00");
  const cin = props.selectedValues.date[0];
  const cout = props.selectedValues.date[1];
  const supImages = [img1, img2];

  const nights = Math.floor((cout - cin) / (1000 * 3600 * 24));
  const guests = props.selectedValues.adults + props.selectedValues.children;

  const [bookingIds, setBookingIds] = useState([]);

  const [selectedRooms, setSelectedRooms] = useState([]);
  useEffect(() => {
    let totalPrice = 0.0;

    selectedRooms.forEach((room) => {
      totalPrice += room.price;
    });

    setTotal(totalPrice);
  }, [selectedRooms]);

  function calculateBB(roomTypeVal, adults, children) {
    const cost = roomTypeVal.price + 2500 * (adults + children * 0.6);
    return cost;
  }
  function calculateHB(roomTypeVal, adults, children) {
    const cost = Math.floor(
      roomTypeVal.price + 5000 * (adults + children * 0.6)
    );
    return cost;
  }
  function calculateFB(roomTypeVal, adults, children) {
    const cost = Math.floor(
      roomTypeVal.price + 7500 * (adults + children * 0.6)
    );
    return cost;
  }

  const handleBooking = () => {
    if (bookingIds.length === 0) {
      alert("Please select a room first.");
    } else {
      navigate("/confirm-booking", {
        state: { bookingIds: bookingIds, total: total },
      });
    }
  };

  const handleSelectRoom = (price, room, type) => {
    const requestBody = {
      checkIn: convertDateToFormat(cin),
      checkOut: convertDateToFormat(cout),
      roomType: room,
      price: price,
    };

    const apiUrl = ipaddress + "/room/booking";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No rooms available");
        }
        return response.json();
      })
      .then((data) => {
        setBookingIds([...bookingIds, data.bookingId]);
        const newRoom = {
          id: selectedRooms.length + 1,
          price: price,
          room: room,
          type: type,
          bId: data.bookingId,
        };

        setSelectedRooms([...selectedRooms, newRoom]);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("No rooms available");
      });
  };

  const handleDeleteRoom = (roomId) => {
    const updatedRooms = selectedRooms.filter((room) => room.id !== roomId);
    setSelectedRooms(updatedRooms);

    const deletedRoom = selectedRooms.find((room) => room.id === roomId);
    const updatedBookingIds = bookingIds.filter(
      (bId) => bId !== deletedRoom.bId
    );
    setBookingIds(updatedBookingIds);

    const deleteIds = [deletedRoom.bId];
    const requestBody = {
      bookingIdList: deleteIds,
    };

    // console.log(requestBody);
    // console.log(bookingIds);

    const deleteUrl = ipaddress + "/room/booking/delete-selections";
    fetch(deleteUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error:", error);
      });
  };

  if (!props.roomData[0]) return <div>Hi</div>;

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={8}>
            {props.roomData.map((roomTypeVal) => {
              return (
                <div className="room-type-block">
                  <Row>
                    <Col>
                      <div
                        className="photo-card"
                        style={{ backgroundColor: "white" }}
                      >
                        <div className="photo-background">
                          <ImageCarousel images={supImages} />
                        </div>
                        <div className="photo-details">
                          <ThemeProvider theme={themeTyp}>
                            <Typography
                              variant="PhotoTopic"
                              sx={{ color: "#030957" }}
                            >
                              {console.log(
                                roomTypeImages[roomTypeVal.roomType]
                              )}
                              {roomTypeVal.roomType}
                            </Typography>
                            <Typography variant="body3">
                              <p style={{ color: "#030957" }}>
                                with mountain views <br />
                                <br />
                                Max occupancy: {roomTypeVal.maxNoOfAdults}{" "}
                                adults and {roomTypeVal.maxNoOfChildren} child
                                <br />
                                Room size: 20 sqm
                                <br />
                                <br />
                                •Non-smoking •Balcony •Air conditioned •Wireless
                                Internet •Free Toiletries
                                {showMore ? (
                                  <p style={{ color: "#030957" }}>
                                    •Cable/SatelliteTV •Balcony •Bath •Linen and
                                    Towels Provided • Iron/Ironing board
                                    •Telephone•Television •Tea/Coffee Maker
                                    •Fridge •Room Safe •Desk •Hairdryer •Terrace
                                    •Mini Bar •Fan •Shower •Linen Provided
                                    •Outdoor Setting
                                  </p>
                                ) : null}
                                <button
                                  className="show-more-btn"
                                  onClick={() => setShowMore(!showMore)}
                                >
                                  {showMore ? "show less" : "... show more"}
                                </button>{" "}
                              </p>
                            </Typography>
                          </ThemeProvider>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row id="b&b">
                    <Col>
                      <div className="room-type">
                        <ThemeProvider theme={themeTyp}>
                          <Button className="discount-btn">
                            <Typography variant="body3">50%</Typography>
                          </Button>
                          <Typography variant="body3" sx={{ color: "#030957" }}>
                            Resident Rate - Bed & Breakfast
                            <br />
                            {/* {roomTypeVal.count} Rooms Available */}
                          </Typography>
                          <div className="room-type-cost">
                            <Typography
                              variant="body3"
                              sx={{
                                color: "#030957",
                                textDecoration: "line-through",
                              }}
                            ></Typography>
                            <Typography
                              variant="PhotoTopic"
                              sx={{ color: "#030957" }}
                            >
                              LKR{" "}
                              {calculateBB(
                                roomTypeVal,
                                props.selectedValues.adults,
                                props.selectedValues.children
                              )}
                            </Typography>
                            <Typography
                              variant="body3"
                              sx={{ color: "#030957" }}
                            >
                              Cost for {nights} night, {guests} guests
                            </Typography>
                          </div>
                          <div className="room-type-btn">
                            <Button
                              className="book-btn"
                              style={{ width: "100%" }}
                              onClick={() =>
                                handleSelectRoom(
                                  calculateBB(
                                    roomTypeVal,
                                    props.selectedValues.adults,
                                    props.selectedValues.children
                                  ),
                                  roomTypeVal.roomType,
                                  "Bed & Breakfast"
                                )
                              }
                            >
                              <Typography variant="body3">Select</Typography>
                            </Button>
                          </div>
                        </ThemeProvider>
                      </div>
                    </Col>
                  </Row>
                  <Row id="hb">
                    <Col>
                      <div className="room-type">
                        <ThemeProvider theme={themeTyp}>
                          <Button className="discount-btn">
                            <Typography variant="body3">50%</Typography>
                          </Button>
                          <Typography variant="body3" sx={{ color: "#030957" }}>
                            Resident Rate - Half Board
                            <br />
                            {/* {roomTypeVal.count} Rooms Available */}
                          </Typography>
                          <div className="room-type-cost">
                            <Typography
                              variant="body3"
                              sx={{
                                color: "#030957",
                                textDecoration: "line-through",
                              }}
                            ></Typography>
                            <Typography
                              variant="PhotoTopic"
                              sx={{ color: "#030957" }}
                            >
                              LKR{" "}
                              {calculateHB(
                                roomTypeVal,
                                props.selectedValues.adults,
                                props.selectedValues.children
                              )}
                            </Typography>
                            <Typography
                              variant="body3"
                              sx={{ color: "#030957" }}
                            >
                              Cost for 1 night, 3 guests
                            </Typography>
                          </div>
                          <div className="room-type-btn">
                            <Button
                              onClick={() =>
                                handleSelectRoom(
                                  calculateHB(
                                    roomTypeVal,
                                    props.selectedValues.adults,
                                    props.selectedValues.children
                                  ),
                                  roomTypeVal.roomType,
                                  "Half Board"
                                )
                              }
                              className="book-btn"
                              style={{ width: "100%" }}
                            >
                              <Typography variant="body3">Select</Typography>
                            </Button>
                          </div>
                        </ThemeProvider>
                      </div>
                    </Col>
                  </Row>
                  <Row id="fb">
                    <Col>
                      <div className="room-type">
                        <ThemeProvider theme={themeTyp}>
                          <Button className="discount-btn">
                            <Typography variant="body3">50%</Typography>
                          </Button>
                          <Typography variant="body3" sx={{ color: "#030957" }}>
                            Resident Rate - Full Board
                            <br />
                            {/* {roomTypeVal.count} Rooms Available */}
                          </Typography>
                          <div className="room-type-cost">
                            <Typography
                              variant="body3"
                              sx={{
                                color: "#030957",
                                textDecoration: "line-through",
                              }}
                            ></Typography>
                            <Typography
                              variant="PhotoTopic"
                              sx={{ color: "#030957" }}
                            >
                              LKR{" "}
                              {calculateFB(
                                roomTypeVal,
                                props.selectedValues.adults,
                                props.selectedValues.children
                              )}
                            </Typography>
                            <Typography
                              variant="body3"
                              sx={{ color: "#030957" }}
                            >
                              Cost for 1 night, 3 guests
                            </Typography>
                          </div>
                          <div className="room-type-btn">
                            <Button
                              onClick={() =>
                                handleSelectRoom(
                                  calculateFB(
                                    roomTypeVal,
                                    props.selectedValues.adults,
                                    props.selectedValues.children
                                  ),
                                  roomTypeVal.roomType,
                                  "Full Board"
                                )
                              }
                              className="book-btn"
                              style={{ width: "100%" }}
                            >
                              <Typography variant="body3">Select</Typography>
                            </Button>
                          </div>
                        </ThemeProvider>
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Col>

          <Col xs={12} sm={12} md={12} lg={4}>
            <div className="room-type-block">
              <div className="pricing-details">
                <ThemeProvider theme={themeTyp}>
                  <Row>
                    <Col xs={4} sm={4} md={4} lg={4}>
                      <Typography variant="NavTyp" sx={{ color: "#030957" }}>
                        Total
                      </Typography>
                    </Col>
                    <Col className="text-end" xs={8} sm={8} md={8} lg={8}>
                      <Typography variant="NavTyp" sx={{ color: "#030957" }}>
                        LKR {total}
                      </Typography>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col xs={8} sm={8} md={8} lg={8}>
                      <Typography variant="body3" sx={{ color: "#030957" }}>
                        {format(new Date(cin), "EEE, dd MMM yy")} –{" "}
                        {format(new Date(cout), "EEE, dd MMM yy")}
                      </Typography>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} className="text-end">
                      <Typography variant="body3" sx={{ color: "#030957" }}>
                        {nights} nights
                      </Typography>
                    </Col>
                  </Row>
                  <Row>
                    <Typography variant="body3" sx={{ color: "#030957" }}>
                      {selectedRooms.length} rooms, {guests} guests
                    </Typography>
                  </Row>
                  {selectedRooms.map((room) => (
                    <div key={room.id} type="room-selection">
                      <Row className="check-col">
                        <Col xs={10} sm={10} md={10} lg={10}>
                          <Typography variant="body2" sx={{ color: "#030957" }}>
                            {room.room} Resident Rate - {room.type}
                          </Typography>
                        </Col>
                        <Col
                          xs={2}
                          sm={2}
                          md={2}
                          lg={2}
                          className="text-center"
                        >
                          <Button
                            type="deletroom"
                            className="show-more-btn"
                            onClick={() => handleDeleteRoom(room.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Typography variant="body3" sx={{ color: "#030957" }}>
                            {guests} Guests {nights} nights
                          </Typography>
                        </Col>
                        <Col className="text-end">
                          <Typography variant="body3" sx={{ color: "#030957" }}>
                            LKR {room.price}
                          </Typography>
                        </Col>
                      </Row>
                    </div>
                  ))}
                  <Row className="check-col">
                    <Col xs={4} sm={4} md={4} lg={4}>
                      <Typography variant="body2" sx={{ color: "#030957" }}>
                        Total
                      </Typography>
                    </Col>
                    <Col className="text-end" xs={8} sm={8} md={8} lg={8}>
                      <Typography variant="body2" sx={{ color: "#030957" }}>
                        LKR {total}
                      </Typography>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Typography variant="body3" sx={{ color: "#030957" }}>
                        Include taxes + fees
                      </Typography>
                    </Col>

                    <Col>
                      <Button
                        className="show-more-btn"
                        onClick={() => setShowTax(!showTax)}
                      >
                        <FontAwesomeIcon
                          icon={showTax ? faArrowCircleUp : faArrowCircleDown}
                        />
                      </Button>
                    </Col>
                    {showTax ? (
                      <Row>
                        <Col>
                          <Typography variant="body2" sx={{ color: "#030957" }}>
                            Service Charge
                          </Typography>
                        </Col>
                        <Col className="text-end">
                          <Typography variant="body2" sx={{ color: "#030957" }}>
                            LKR {(total * 0.1).toFixed(2)}
                          </Typography>
                        </Col>
                      </Row>
                    ) : null}
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Button
                        className="book-btn"
                        style={{
                          width: "95%",
                          height: "40px",
                        }}
                        onClick={handleBooking}
                      >
                        <Typography variant="body3">Book</Typography>
                      </Button>
                    </Col>
                  </Row>
                </ThemeProvider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchResult;
