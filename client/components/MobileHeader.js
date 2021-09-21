import Link from "next/link";
import Nav from "./Nav";
import React from "react";
import NavButton from "./NavButton";
import MainBar from "./styles/MainBar";

export default function MobileHeader() {
  const [width, setWidth] = React.useState(0);
  const breakpoint = 780;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <header>
      <div>
        <div>
          <h1>
            <Link href='/'>MENU</Link>
          </h1>
        </div>
        <div>{width > breakpoint ? <Nav /> : <NavButton />}</div>
      </div>
    </header>
  );
}

// TODO: On width change, add a 'transition' to the movement of the Logo Location
// TODO: on width change, add a 'transition' to the font-size for the rest of the header

// https://www.w3schools.com/css/tryit.asp?filename=trycss3_transition_speed
