import { createTheme } from "@mui/material/styles";

export const themeTyp = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
    NavTyp: {
      fontSize: 20,
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: "#ffffff",
    },
    NavTyp1: {
      fontSize: 20,
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 500,
    },

    PhotoTopic: {
      fontSize: 30,
      fontFamily: "Raleway",
      fontWeight: 600,
      color: "#ffffff",
      textTransform: "uppercase",
    },

    PhotoTopic1: {
      fontSize: 30,
      fontFamily: "Raleway",
      fontWeight: 600,
      color: "#ffffff",
    },

    OfferPrice: {
      fontSize: 40,
      fontFamily: "Raleway",
      fontWeight: 700,
      color: "#030957",
    },

    H1: {
      fontSize: 50,
      fontFamily: "Raleway",
      fontWeight: 700,
      textTransform: "none",
      padding: "20px",
    },

    body1: {
      color: "#ffffff",
      display: "block",
      fontSize: 15,
      fontFamily: "Raleway",
      fontWeight: 100,
      textTransform: "none",
    },
    body3: {
      color: "#ffffff",
      display: "block",
      fontSize: 15,
      fontFamily: "Raleway",
      fontWeight: 400,
      textTransform: "none",
    },

    body2: {
      color: "#ffffff",
      display: "block",
      fontSize: 15,
      fontFamily: "Raleway",
      fontWeight: 700,
      textTransform: "none",
    },

    button: {
      fontFamily: "Raleway",
      fontSize: 18,
      fontWeight: 700,
      textTransform: "none",
    },

    button1: {
      fontFamily: "Raleway",
      fontSize: 20,
      fontWeight: 500,
      textTransform: "none",
    },

    forum: {
      fontFamily: "Raleway",
      fontSize: 15,
      fontWeight: 300,
      textTransform: "none",
      color: "#ffffff",
    },
  },
});

export const themeNav = createTheme({
  MuiAppBar: {
    root: {
      background: "linear-gradient(90deg, #090c54, #0d0a26)", // Set the background color to transparent
      boxShadow: "none", // Remove the default box shadow
    },
  },
});
