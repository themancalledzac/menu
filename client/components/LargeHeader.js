import * as React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { IconButton, Menu, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useUser } from "./graph_ql_queries/User";
import SignOut from "./signout";
import { useRouter } from "next/router";

export default function LargeHeader() {
  const router = useRouter();

  const user = useUser();
  // console.log(user);
  // user && console.log(user.id);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function refreshPage() {
    router.push("/");
  }

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
          {user ? (
            <div>
              <MenuItem onClick={handleClose}>
                <Link href='/profile'>Profile</Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose(), refreshPage();
                }}
              >
                <SignOut />
              </MenuItem>
            </div>
          ) : (
            <MenuItem onClick={handleClose}>
              <Link href='/signin'>Sign In</Link>
            </MenuItem>
          )}
        </Menu>
      </div>
    </>
  );
}
