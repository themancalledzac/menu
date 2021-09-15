import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";
import React from "react";
import NavButton from "./NavButton";
import MainBar from "./styles/MainBar";

const Bar = styled.div`
  @media (max-width: 1051px) {
    border-bottom: 10px solid black;
    display: flex;
    grid-template-columns: auto 1fr;
    justify-content: center;
    align-items: stretch;
    background-color: blueviolet;
  }
`;

const SubBar = styled.div`
  @media (max-width: 1051px) {
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid black;
    justify-content: center;
    display: flex;
  }
`;

const Title = styled.h1`
  @media (min-width: 1052px) {
    margin-left: 3rem;
  }
`;
export default function Header() {
  const [width, setWidth] = React.useState(0);
  const breakpoint = 780;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <header>
      <MainBar>
        <Bar>
          <Title>
            <Link href='/'>MENU</Link>
          </Title>
        </Bar>
        <SubBar>{width > breakpoint ? <Nav /> : <NavButton />}</SubBar>
      </MainBar>
    </header>
  );
}

// TODO: On width change, add a 'transition' to the movement of the Logo Location
// TODO: on width change, add a 'transition' to the font-size for the rest of the header

// https://www.w3schools.com/css/tryit.asp?filename=trycss3_transition_speed
