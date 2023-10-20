import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ButtonGroup from "@mui/material/ButtonGroup";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

import { themeTyp, themeNav } from "../Styles/Theme.js";
import img1 from "../Images/w-hotels-logo-transparent-31.png";

const pages = ["Home", "Rooms", "Offers", "Restaurant"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
// const list = ["Login", "SignUp"];

const auth = false;

function ResponsiveAppBar() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={themeNav}>
      <AppBar
        position="fixed"
        style={{ background: navbar ? "#030957" : "transparent" }}
        zIndex={1001}
      >
        <Container
          maxWidth="xl"
          //  sx={{background: 'linear-gradient(90deg, #090c54, #0d0a26)'}}
        >
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <img
                alt=""
                src={img1}
                width="100"
                height="70"
                className="d-inline-block align-top"
              />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                background="black"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <ThemeProvider theme={themeTyp}>
                      <a
                        href={`/#${page}`}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        <Typography variant="NavTyp1" fontextAlign="center">
                          {page}
                        </Typography>
                      </a>
                    </ThemeProvider>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1, mr: 2 }}
            >
              <img
                alt=""
                src={img1}
                width="100"
                height="70"
                className="d-inline-block align-top"
              />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  href={`/#${page}`}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    marginLeft: 5,
                  }}
                >
                  <ThemeProvider theme={themeTyp}>
                    <Typography variant="NavTyp1" fontextAlign="center">
                      {page}
                    </Typography>
                  </ThemeProvider>
                </Button>
              ))}
            </Box>

            {/* {auth ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography variant="NavTyp1" textAlign="center">
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <ButtonGroup color="inherit" variant="text">
                  {list.map((list) => (
                    <Button sx={{ color: "inherit", display: "block" }}>
                      <ThemeProvider theme={themeTyp}>
                        <Typography variant="NavTyp1" fontextAlign="center">
                          {list}
                        </Typography>
                      </ThemeProvider>
                    </Button>
                  ))}
                </ButtonGroup>
              </Box>
            )} */}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
