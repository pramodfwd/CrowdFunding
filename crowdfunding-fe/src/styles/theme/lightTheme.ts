import { Roboto } from "@next/font/google";
import { createTheme, styled, Theme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f485ab",
      light: '#f7ddef',
      dark: "black",
      contrastText:"#787a7a",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#fcf8de",
      contrastText: "#D3D3D3",
    },
    error: {
      main: red.A400,
      light: "#96c746"
    },
  },
  spacing: 10,
  typography: {

    fontFamily: "PT Sans",

    h1: {
      fontSize: '56px',
    },
    subtitle2: {
      fontSize: '20px',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '14px',
      fontWeight: 400,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
    },
    body2: {
      fontSize: '18px',
      fontWeight: 400,
    },
    h2: {
      fontSize: '3.28571em',
      fontWeight: 545,
    },
    h3: {
      fontSize: '36px',
      fontWeight: 550,
      lineHeight: "46px",
      letterSpacing: "1px",
    },
    h4: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: "46px",
    },
  }
});
export default lightTheme;

export const NavButton = {
  fontSize: 20, textTransform: "capitalize;", fontWeight: 600,
  "&:hover": { color: "primary.main" }
};
