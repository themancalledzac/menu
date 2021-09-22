import * as React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useUser } from "./User";
import { styled } from "@mui/material/styles";
import DropDownMenu from "./DropDownMenu";
import homeTheme from "../src/homeTheme";
import LargeHeader from "./LargeHeader";

export default function DesktopHeader() {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.down("md"));
  const medium = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const StyledToolbar = styled(Toolbar)({
    backgroundColor: homeTheme.palette.primary.dark,
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <StyledToolbar>
          <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>
            <Link href='/'>Menu</Link>
          </Typography>

          {!large && <LargeHeader />}

          {medium && <DropDownMenu />}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
