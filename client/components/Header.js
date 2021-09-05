import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";

export default function Header() {
  const HeaderStyles = styled.header`
    .bar {
      border-bottom: 10px solid black;
      display: grid;
      grid-template-columns: auto 1fr;
      justify-content: space-between;
      align-items: stretch;
      background-color: blueviolet;
    }
    .sub-bar {
      display: grid;
      grid-template-columns: 1fr auto;
      border-bottom: 1px solid black;
    }

    .title {
      margin-left: 3rem;
    }
  `;

  return (
    <HeaderStyles>
      <div className='bar'>
        <h1 className='title'>
          <Link href='/'>MENU</Link>
        </h1>
        <Nav />
      </div>
    </HeaderStyles>
  );
}
