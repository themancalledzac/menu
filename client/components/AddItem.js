import styled from "styled-components";
import formatMoney from "../lib/formatMoney";

export default function AddItem({ name, price, description, stock }) {
  return (
    <div>
      <div>
        <div>
          <div>
            <h1>{name}</h1>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div>
            <h6>{formatMoney(price)}</h6>
          </div>
          <div>
            <h6>{stock}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
