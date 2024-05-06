import { createTheme, ThemeOptions } from "@mui/material/styles";

export const lightTheme: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#264653",
    },
    secondary: {
      main: "#e9c46a",
    },
    success: {
      main: '#2a9d8f',
    },
  },
});
