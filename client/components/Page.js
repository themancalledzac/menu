import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileHeader from "../components/MobileHeader";
import DesktopHeader from "../components/DesktopHeader";
import useMediaQuery from "@mui/material/useMediaQuery";
import ScrollTitle from "./ScrollTitle";

export default function Page({ children }) {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(true);
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div>
      {/* {!matches && <ScrollTitle />} */}
      <DesktopHeader />
      <div>{children}</div>
      {!matches && <MobileHeader />}
    </div>
  );
}
