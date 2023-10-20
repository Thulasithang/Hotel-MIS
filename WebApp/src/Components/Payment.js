import * as React from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Form from "react-bootstrap/Form";
import ipaddress from "../config";

import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";

import "../Styles/payment.css";

import {
  faCreditCard,
  faHome,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <ThemeProvider theme={themeTyp}>{children}</ThemeProvider>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PaymentForm = (props) => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  // console.log(props.bookingData.customerId);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePaymentConfirm = () => {
    // Create the data object to send in the POST request
    const requestBody = {
      bookingIdList: props.bookingData.bookingIds,
      customerId: props.bookingData.customerId,
    };

    // Define the URL and headers
    const url = ipaddress + "/room/booking/confirm-booking";
    const headers = {
      "Content-Type": "application/json",
    };

    // Perform the POST request using fetch
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Booking confirmed successfully");
          /// need a alert showing that booking is successfull
          navigate("/booking-success", {
            state: {
              bookingIds: props.bookingData.bookingIds,
              bookingData: props.bookingData,
            },
          });

          return response.json();
        } else {
          console.error("Booking confirmation failed");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="container py-5 from-block">
        <div className="row">
          <div className=" mx-auto  ">
            <div className=" form-block rounded-lg shadow-sm p-5">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon label tabs example"
                variant="fullWidth"
                textColor="#030957"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#030957",
                  },
                }}
              >
                <Tab
                  icon={<FontAwesomeIcon icon={faCreditCard} />}
                  label="Credit Card"
                  {...a11yProps(0)}
                />
                <Tab
                  icon={<FontAwesomeIcon icon={faPaypal} />}
                  label="Pay Pal"
                  {...a11yProps(1)}
                />
                <Tab
                  icon={<FontAwesomeIcon icon={faHome} />}
                  label="Bank Transfer"
                  {...a11yProps(2)}
                />
              </Tabs>
              <CustomTabPanel value={value} index={0}>
                <div id="nav-tab-card">
                  <p className="alert alert-success">
                    Some text success or error
                  </p>
                  <div className="form-group">
                    <label htmlFor="username">Full name (on the card)</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Jeff Doe"
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card number</label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Your card number"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="form-group">
                        <label>
                          <span className="hidden-xs">Expiration</span>
                        </label>
                        <div className="input-group">
                          <input
                            type="number"
                            placeholder="MM"
                            name=""
                            className="form-control"
                            required
                          />
                          <input
                            type="number"
                            placeholder="YY"
                            name=""
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group mb-4">
                        <label
                          data-toggle="tooltip"
                          title="Three-digits code on the back of your card"
                        >
                          CVV <FontAwesomeIcon icon={faQuestion} />
                        </label>
                        <input type="text" required className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
                <div id="nav-tab-paypal">
                  <p>Paypal is easiest way to pay online</p>
                  <p>
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill"
                    >
                      <FontAwesomeIcon icon={faPaypal} />
                      Log into my Paypal
                    </button>
                  </p>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={2}>
                {" "}
                <div id="nav-tab-bank">
                  <h6>Bank account details</h6>
                  <dl>
                    <dt>Bank</dt>
                    <dd>W Hotels and Group</dd>
                  </dl>
                  <dl>
                    <dt>Account number</dt>
                    <dd>7775877975</dd>
                  </dl>
                  <dl>
                    <dt>Bank of Ceylon</dt>
                    <dd>Colombo Main Branch</dd>
                  </dl>
                  <Form.Label>Upload a clear photo of your transfer</Form.Label>
                  <Form.Control type="file" />
                </div>
              </CustomTabPanel>
            </div>
            <button
              type="button"
              className="book-btn"
              style={{ marginTop: "-70px" }}
              onClick={handlePaymentConfirm}
            >
              <Typography variant="button">Confirm</Typography>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
