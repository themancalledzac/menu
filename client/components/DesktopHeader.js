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

export default function DesktopHeader({ title }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const user = useUser();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const StyledToolbar = styled(Toolbar)({
    backgroundColor: theme.palette.primary.main,
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <StyledToolbar>
          <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>
            <Link href='/'>Menu</Link>
          </Typography>
          {!matches && (
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
          )}

          {matches && <DropDownMenu />}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
