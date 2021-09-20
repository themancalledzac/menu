import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

// // don't relaly NEED to use propTypes
// Page.propTypes = {
//   children: PropTypes.any,
// };

// // children: PropTypes.any
