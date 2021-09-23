import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileHeader from "../components/MobileHeader";
import DesktopHeader from "../components/DesktopHeader";
import useMediaQuery from "@mui/material/useMediaQuery";
import ScrollTitle from "./ScrollTitle";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";

const MainPageDiv = styled("div")({
  maxWidth: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "rgba(255, 255, 255, .5)",
  alignContent: "center",
  display: "flex",
  justifyContent: "center",
});

const MainPaper = styled(Paper)(({ theme }) => ({
  alignContent: "center",
  marginTop: "2rem",
  width: "50rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "85%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export default function Page({ children }) {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(true);
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      {/* {!matches && <ScrollTitle />} */}
      <DesktopHeader />
      <MainPageDiv>
        <MainPaper>{children}</MainPaper>
      </MainPageDiv>
      {!matches && <MobileHeader />}
    </>
  );
}
