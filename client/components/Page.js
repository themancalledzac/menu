import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Page({ children }) {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(true);
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div>
      {matches && <DesktopHeader />}
      <div>{children}</div>
      {!matches && <MobileHeader />}
    </div>
  );
}

// // don't relaly NEED to use propTypes
// Page.propTypes = {
//   children: PropTypes.any,
// };

// // children: PropTypes.any
