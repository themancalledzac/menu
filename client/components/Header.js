import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";
import React from "react";
import NavButton from "./NavButton";

export default function Header() {
  const HeaderStyles = styled.header`
    @media (min-width: 1052px) {
      .wideMain {
        border-bottom: 10px solid black;
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
        background-color: blueviolet;
      }
      .title {
        margin-left: 3rem;
      }
    }
    @media (max-width: 1051px) {
      .bar {
        border-bottom: 10px solid black;
        display: flex;
        grid-template-columns: auto 1fr;
        justify-content: center;
        align-items: stretch;
        background-color: blueviolet;
      }
      .sub-bar {
        /* display: grid; */
        grid-template-columns: 1fr auto;
        border-bottom: 1px solid black;
        justify-content: center;
        display: flex;
      }
    }
    @media (max-width: 780px) {
    }
  `;

  const [width, setWidth] = React.useState(0);
  const breakpoint = 780;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <HeaderStyles>
      <div className='wideMain'>
        <div className='bar'>
          <h1 className='title'>
            <Link href='/'>MENU</Link>
          </h1>
        </div>
        <div className='sub-bar'>
          {width > breakpoint ? <Nav /> : <NavButton />}
        </div>
      </div>
    </HeaderStyles>
  );
}
