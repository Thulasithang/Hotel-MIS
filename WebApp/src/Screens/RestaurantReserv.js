import React from "react";
import Restaurant from "../Components/Restaurant";
import TableBooking from "../Components/TableBooking";
import { Row, Col, Card, Container } from "react-bootstrap";

import "../Styles/image-card-materialize.css";

import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";
import { Typography } from "@mui/material";

import img1 from "../Images/tableplan.png";

export default function RestaurantReserv() {
  return (
    <>
      <Restaurant />

      <Container
        className="container-card"
        style={{ width: "90%", marginTop: "40px" }}
      >
        <Row>
          <Col sm={12} md={12}>
            <Card>
              <ThemeProvider theme={themeTyp}>
                <Card.Img variant="top" src={img1} alt="table map" />
                <Card.Body className="reserve-body">
                  <Card.Text>
                    <Typography
                      variant="PhotoTopic"
                      textTransform={"none"}
                      textAlign={"center"}
                    >
                      Reserve a Table for Your Moment!
                    </Typography>
                    <Typography variant="body3" textAlign={"center"}>
                      Reserve your spot at our restaurant and savor an
                      exceptional dining experience. Secure a table for your
                      desired time and enjoy our delectable menu, exquisite
                      ambiance, and impeccable service. Whether it's a special
                      occasion or a casual gathering, we're here to make your
                      dining moments unforgettable. Book your table now for a
                      culinary journey like no other.
                    </Typography>

                    <TableBooking />
                  </Card.Text>
                </Card.Body>
              </ThemeProvider>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
