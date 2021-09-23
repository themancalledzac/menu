import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useUser } from "./User";

export default function DropDownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = useUser();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id='hamburger_menu'
        aria-controls='hamburger_menu'
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        aria-label='menu'
        size='large'
        edge='start'
        color='inherit'
      >
        <MenuIcon />
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
        <MenuItem onClick={handleClose}>
          <Link href='/create'>Create</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='/favorites'>Burgers</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='/cart'>Cart</Link>
        </MenuItem>
        {!user ? (
          <MenuItem onClick={handleClose}>
            <Link href='/signin'>Sign In</Link>
          </MenuItem>
        ) : (
          <MenuItem onClick={handleClose}>
            <Link href='/profile'>Profile</Link>
          </MenuItem>
        )}
      </Menu>
    </>
  );
}
