import Link from "next/link";
import Nav from "./Nav";
import React from "react";
import NavButton from "./NavButton";
import MainBar from "./styles/MainBar";
import HomeIcon from "@mui/icons-material/Home";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/system";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

export default function MobileHeader() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Link href='/' passHref>
            <BottomNavigationAction label='Home' icon={<HomeIcon />} />
          </Link>
          <Link href='/create' label='Create'>
            <BottomNavigationAction label='Create' icon={<AddBoxIcon />} />
          </Link>
          <Link href='/favorites' label='Create'>
            <BottomNavigationAction label='Burgers' icon={<FastfoodIcon />} />
          </Link>
          <Link href='/cart' label='Create'>
            <BottomNavigationAction label='Cart' icon={<ShoppingCartIcon />} />
          </Link>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

// TODO: On width change, add a 'transition' to the movement of the Logo Location
// TODO: on width change, add a 'transition' to the font-size for the rest of the header

// https://www.w3schools.com/css/tryit.asp?filename=trycss3_transition_speed
