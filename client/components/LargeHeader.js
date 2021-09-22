import * as React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { IconButton, Menu, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useUser } from "./User";

export default function LargeHeader() {
  const user = useUser();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
        <Link href='/create'>Create</Link>
      </Typography>
      <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
        <Link href='/favorites'>Burgers</Link>
      </Typography>
      <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
        <Link href='/cart'>Cart</Link>
      </Typography>
      {user && (
        <div>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleMenu}
            color='inherit'
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
      )}
      {!user && (
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          'Sign In'
        </Typography>
      )}
    </>
  );
}
