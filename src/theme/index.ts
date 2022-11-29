import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    grey: {
      "100": "#B8BFC5",
      "200": "#E8EAED",
      "300": "#828E99",
      "400": "#404040",
      "500": "#3F3F3F",
      "600": "#E0E0E0",
      "700": "#F8F8F8",
      "800":'#F5F7FA',
      "900": "#191E24",
    },
    primary: {
      main: "#F01A3A",
      light: "#E51937",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
