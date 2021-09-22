import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileHeader from "../components/MobileHeader";
import DesktopHeader from "../components/DesktopHeader";
import useMediaQuery from "@mui/material/useMediaQuery";
import ScrollTitle from "./ScrollTitle";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";

const MainPageDiv = styled("div")(({ theme }) => ({
  maxWidth: "95%",
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "rgba(255, 255, 255, .5)",
  alignContent: "center",
  display: "flex",
  justifyContent: "center",
}));

const MainPaper = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    alignContent: "center",
    maxWidth: "85%",
    marginTop: "2rem",
    width: "50rem",
  },
  [theme.breakpoints.down("sm")]: {
    alignContent: "center",
    maxWidth: "97%",
    marginTop: "2rem",
    width: "50rem",
  },
}));

export default function Page({ children }) {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(true);
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div>
      {/* {!matches && <ScrollTitle />} */}
      <DesktopHeader />
      <MainPageDiv>
        <MainPaper>{children}</MainPaper>
      </MainPageDiv>
      {!matches && <MobileHeader />}
    </div>
  );
}
