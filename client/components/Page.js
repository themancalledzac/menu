import React from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Oswald';
    src: url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");
    font-weight: normal;
    font-size: normal;
  }
  html {
    maxWidth: 1000px;
    --bs: 0 112px 24px 0 rgba(0,0,0,0.09);
  }
    body {
    font-family: 'Oswald', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

// don't relaly NEED to use propTypes
Page.propTypes = {
  children: PropTypes.any,
};

// children: PropTypes.any
