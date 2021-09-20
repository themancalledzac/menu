import Link from "next/link";
import { useUser } from "./User";

// const NavStyled = styled.ul`
//   margin: 0;
//   padding: 0;
//   display: flex;
//   justify-content: flex-end;
//   font-size: 2rem;
//   a,
//   button {
//     padding: 1rem 3rem;
//     display: flex;
//     align-items: flex-end;
//     position: relative;
//     text-transform: uppercase;
//     font-weight: 900;
//   }

//   @media (max-width: 1051px) {
//     font-size: 1.5rem;
//   }
// `;
export default function NavButton() {
  const user = useUser();

  return (
    <ul>
      <Link href='/create'>Create</Link>
      {/* Here we do a <user && (
          // all of our links that only work when a user is logged in, or if user exists
      // ) */}
      <Link href='/favorites'>Burgers</Link>
      <Link href='/cart'>Cart</Link>
      {!user ? (
        <Link href='/signin'>Sign In</Link>
      ) : (
        <Link href='/signout'>Sign Out</Link>
      )}
    </ul>
  );
}
