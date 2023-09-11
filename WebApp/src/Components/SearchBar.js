import * as React from "react";
import dayjs from "dayjs";

import Popover from "@mui/material/Popover";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeTyp } from "../Styles/Theme";

import "../Styles/searchbar.css";
// ==========================ReactBoostrap============================
// import { Container, Row, Col } from "react-bootstrap";
// ==========================GUESTS===========================
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// ==========================DATE============================
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

// ==========================================================

export default function BasicPopover() {
  const [adults, setAdults] = React.useState("");
  const [children, setChildren] = React.useState("");
  const [date, setDate] = React.useState([dayjs(), dayjs().add(1, "day")]);
  const [promo, setPromo] = React.useState("");

  const handleChangeAdult = (event) => {
    setAdults(event.target.value);
  };

  const handleChangeChildren = (event) => {
    setChildren(event.target.value);
  };
  //=======================================================
  const [anchorElG, setAnchorElG] = React.useState(null);
  const handleClickG = (event) => {
    setAnchorElG(event.currentTarget);
  };
  const handleCloseG = () => {
    setAnchorElG(null);
  };
  const openG = Boolean(anchorElG);
  const idG = openG ? "simple-popover" : undefined;

  // =======================================================
  const [anchorElCi, setAnchorElCi] = React.useState(null);
  const handleClickCi = (event) => {
    setAnchorElCi(event.currentTarget);
  };
  const handleCloseCi = () => {
    setAnchorElCi(null);
  };
  const openCi = Boolean(anchorElCi);
  const idCi = openCi ? "simple-popover" : undefined;

  // =======================================================

  return (
    <>
      <div className="search-bar">
        <div style={{ flex: 5 }}>
          {/* ===========DATE=========== */}
          <div>
            <Box
              className="search-input"
              aria-describedby={idCi}
              onClick={handleClickCi}
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "100%",
                  paddingRight: 2,
                },
                backgroundColor: "#fff",
                borderRadius: "5px",
                margin: "4px",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-read-only-input"
                label="Check-in/Check-out"
                InputLabelProps={{ className: "labelfont" }}
                value={
                  date[0].format("DD/MM/YYYY") +
                  " - " +
                  date[1].format("DD/MM/YYYY")
                }
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
            </Box>
            <Popover
              id={idCi}
              open={openCi}
              anchorEl={anchorElCi}
              onClose={handleCloseCi}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{ marginTop: "5px" }}
            >
              <Box sx={{ padding: "0px 7px 7px 7px" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DateRangePicker", "DateRangePicker"]}
                  >
                    <DemoItem component="DateRangePicker">
                      <DateRangePicker
                        localeText={{ start: "", end: "" }}
                        minDate={dayjs()}
                        value={date}
                        onChange={(newValue) => setDate(newValue)}
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
            </Popover>
          </div>
        </div>
        <div style={{ flex: 4 }}>
          {/* ===========GUEST=========== */}
          <div>
            <Box
              className="search-input"
              aria-describedby={idG}
              onClick={handleClickG}
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "100%",
                  paddingRight: 2,
                },
                backgroundColor: "#fff",
                borderRadius: "5px",

                margin: "4px",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-read-only-input"
                label="Guests"
                InputLabelProps={{ className: "labelfont" }}
                defaultValue="Guests"
                value={adults + " Adults, " + children + " Children"}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
            </Box>
            <Popover
              id={idG}
              open={openG}
              anchorEl={anchorElG}
              onClose={handleCloseG}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Box sx={{ padding: "15px" }}>
                <Grid container spacing={2} sx={{ backgroundColor: "#fff" }}>
                  <Grid item md={6}>
                    <Box sx={{ minWidth: 150 }}>
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          className="labelfont"
                        >
                          Adults
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={adults}
                          label="Adults"
                          onChange={handleChangeAdult}
                          SelectDisplayProps={{ className: "labelfont" }}
                        >
                          <MenuItem value={1} className="menuitem">
                            One
                          </MenuItem>
                          <MenuItem value={2} className="menuitem">
                            Two
                          </MenuItem>
                          <MenuItem value={3} className="menuitem">
                            Three
                          </MenuItem>
                          <MenuItem value={4} className="menuitem">
                            Four
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item md={6}>
                    <Box sx={{ minWidth: 150 }}>
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          className="labelfont"
                        >
                          Children
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={children}
                          label="Children"
                          onChange={handleChangeChildren}
                          sx={{ color: "#030957" }}
                          SelectDisplayProps={{ className: "labelfont" }}
                        >
                          <MenuItem value={1} className="menuitem">
                            One
                          </MenuItem>
                          <MenuItem value={2} className="menuitem">
                            Two
                          </MenuItem>
                          <MenuItem value={3} className="menuitem">
                            Three
                          </MenuItem>
                          <MenuItem value={4} className="menuitem">
                            Four
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Popover>
          </div>
        </div>
        <div style={{ flex: 3 }}>
          {/* ===========Promo=========== */}
          <div>
            <Box
              className="search-input"
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "100%",
                  paddingRight: 2,
                },
                backgroundColor: "#fff",
                borderRadius: "5px",

                margin: "4px",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-basic"
                label="Promo Code"
                InputLabelProps={{ className: "labelfont" }}
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                // print "Promo -{promo}" in console
                console={console.log(`Promo is ${promo}`)}
                variant="filled"
              />
            </Box>
          </div>
        </div>

        <div style={{ flex: 2 }}>
          {/* ===========Button=========== */}
          <button className="search-button" type="submit">
            <ThemeProvider theme={themeTyp}>
              <Typography
                variant="button1"
                sx={{
                  padding: "20px 0px 20px 0px",
                  margin: "20px 0px 20px 0px",
                }}
              >
                Search
              </Typography>
            </ThemeProvider>
          </button>
        </div>
      </div>
    </>
  );
}
