import Link from "next/link";
import styled from "styled-components";

export default function Nav() {
  const NavStyles = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    justify-self: end;
    font-size: 2rem;
    a,
    button {
      padding: 1rem 3rem;
      display: flex;
      align-items: center;
      position: relative;
      text-transform: uppercase;
      font-weight: 900;
    }
  `;

  return (
    <NavStyles>
      <Link href='/create'>Create</Link>
      {/* Here we do a <user && (
          // all of our links that only work when a user is logged in, or if user exists
      // ) */}
      <Link href='/favorites'>Favorites</Link>
      <Link href='/about'>About</Link>
      <Link href='/login'>Login</Link>
    </NavStyles>
  );
}
