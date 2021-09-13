import styled from "styled-components";

const MainBar = styled.div`
  @media (min-width: 1052px) {
    border-bottom: 10px solid black;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    background-color: blueviolet;
  }
`;

export default MainBar;
