import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const homeTheme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
      second: "#55A0D6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default homeTheme;
