import Link from "next/link";
import formatMoney from "../lib/formatMoney";
import ItemStyles from "./styles/ItemStyles";
import ItemGrid from "./ItemGrid";

export default function Burger({ burger, id, description }) {
  return (
    <div key={id}>
      <h1>{burger.name}</h1>
      <h2> {formatMoney(burger.price)}</h2>
      <h2>{description}</h2>
    </div>
  );
}
