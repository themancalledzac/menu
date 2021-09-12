import Link from "next/link";
import ItemStyles from "./styles/ItemStyles";

export default function Burger({ burger, id }) {
  return (
    <ItemStyles key={id}>
      <h1>{burger.name}</h1>
      <h2>{burger.price}</h2>
    </ItemStyles>
  );
}
