import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export default styled.createGlobalStyle`
  font-family {
    font-family: "Arial, Helvetica, sans-serif";
  }
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3a3a3a;
    --gray: var(--grey);
    --lightGrey: var(--lightGray);
    --lightGray: #e1e1e1;
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    box-sizing: border-box;
  }
`;
