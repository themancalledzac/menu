import React from "react";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney";

const ItemGrid = styled.div`
  padding: 1rem;
  margin: 1rem;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  display: grid;
  grid-template-columns: 0.15fr 1fr 0.5fr 1.5fr;
`;

const ChooseProtein = ({ name, id, price, description }) => {
  return (
    <ItemGrid>
      <label>
        <input type='radio' checked='unchecked' name='radio'></input>
      </label>
      <div>{name}</div>
      <div> {formatMoney(price)}</div>
      <div>{description}</div>
    </ItemGrid>
  );
};

export default ChooseProtein;
