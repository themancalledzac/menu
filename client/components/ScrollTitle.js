import {
  AppBar,
  CssBaseline,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";
import homeTheme from "../src/homeTheme";

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    targer: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
export default function ScrollTitle(props) {
  const StyledBar = styled(Toolbar)({
    backgroundColor: homeTheme.palette.primary.dark,
    height: "64px",
    paddingLeft: "24px",
  });

  return (
    <div>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <StyledBar>
            <Typography variant='h4' component='div'>
              Menu
            </Typography>
          </StyledBar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
