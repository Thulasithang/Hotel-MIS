import React, { useState } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";

import "../Styles/tablebooking.css";

// import MUI=======================================================================
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";
// =================================================================================

import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";

import TableMap from "../Components/TableMap";

// =================================================================================

const SwitchFormComponent = () => {
  const [stayInHotel, setStayInHotel] = useState(false);
  const [roomNumber, setRoomNumber] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [meal, setMeal] = useState("");
  const [time, setTime] = React.useState(dayjs("2022-04-17T15:30"));

  const handleSwitchChange = () => {
    setStayInHotel(!stayInHotel);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stayInHotel) {
      // Handle log in form submission
      console.log("Rserving for Insider:", roomNumber, password);
    } else {
      // Handle sign up form submission
      console.log("Rserving for Outsider:", name, telephone);
    }
  };

  const handleBooking = (tableNumber) => {
    console.log(`Table ${tableNumber} booked!`);
    // Here you can implement further booking logic or API calls
  };
  // =================================================================================

  const getMinTime = () => {
    if (meal === "Breakfast") {
      return dayjs().set("hour", 8).set("minute", 0);
    } else if (meal === "Lunch") {
      return dayjs().set("hour", 12).set("minute", 0);
    } else if (meal === "Dinner") {
      return dayjs().set("hour", 19).set("minute", 0);
    }
    return dayjs();
  };

  const getMaxTime = () => {
    if (meal === "Breakfast") {
      return dayjs().set("hour", 10).set("minute", 0);
    } else if (meal === "Lunch") {
      return dayjs().set("hour", 14).set("minute", 30);
    } else if (meal === "Dinner") {
      return dayjs().set("hour", 21).set("minute", 0);
    }
    return dayjs();
  };

  // =================================================================================

  return (
    <>
      <TableMap onBook={handleBooking} />

      {/* forum to enter customer details */}
      <Container style={{ width: "100%" }}>
        <ThemeProvider theme={themeTyp}>
          <Row style={{ width: "100%" }}>
            <Col sm={12} md={12}>
              <Form>
                <Form.Group controlId="stayInHotel">
                  <Typography variant="button">
                    <Form.Check
                      type="switch"
                      label="Do you stay in our Hotel ?"
                      checked={stayInHotel}
                      onChange={handleSwitchChange}
                    />
                  </Typography>
                </Form.Group>
                <br />
                <Form onSubmit={handleSubmit}>
                  {stayInHotel ? (
                    <>
                      <Form.Group>
                        <Form.Label
                          className="form-lable"
                          controlId="roomNumber"
                        >
                          <Typography variant="forum">Room Number </Typography>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          value={roomNumber}
                          onChange={(e) => setRoomNumber(e.target.value)}
                        />
                        <Form.Label className="form-lable" controlId="password">
                          <Typography variant="forum">Password </Typography>
                        </Form.Label>
                        <Form.Control
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                    </>
                  ) : (
                    <>
                      <Form.Group>
                        <Form.Label className="form-lable" controlId="name">
                          <Typography variant="forum">Name</Typography>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Label
                          className="form-lable"
                          controlId="telephone"
                        >
                          <Typography variant="forum">
                            Telephone Number
                          </Typography>
                        </Form.Label>
                        <Form.Control
                          type="tel"
                          value={telephone}
                          onChange={(e) => setTelephone(e.target.value)}
                        />
                      </Form.Group>
                    </>
                  )}

                  <Form.Group>
                    <Form.Label className="form-lable" controlId="meal">
                      <Typography variant="forum">Meal</Typography>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      type="text"
                      value={meal}
                      onChange={(e) => setMeal(e.target.value)}
                    >
                      <option value="Breakfast">Breakfast</option>
                      <option value="Lunch">Lunch</option>
                      <option value="Dinner">Dinner</option>
                    </Form.Select>

                    <br />

                    <Form.Label className="form-lable" controlId="time">
                      <Typography variant="forum">Time</Typography>
                    </Form.Label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["MultiSectionDigitalClock"]}>
                        <DemoItem>
                          <MultiSectionDigitalClock
                            sx={{ height: "100px" }}
                            value={time}
                            onClick={(e) => setTime(e.target.value)}
                            console={console.log({ time })}
                            maxTime={getMaxTime()}
                            minTime={getMinTime()}
                          />
                        </DemoItem>
                      </DemoContainer>
                    </LocalizationProvider>
                  </Form.Group>
                  <button className="btnbooking" onClick={handleSubmit}>
                    Book Table
                  </button>
                </Form>
              </Form>
            </Col>
          </Row>
        </ThemeProvider>
      </Container>
    </>
  );
};

export default SwitchFormComponent;
