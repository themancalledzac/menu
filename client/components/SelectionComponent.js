import React from "react";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney";
import ItemGrid from "./ItemGrid";

const ChooseProtein = ({ name, id, price, description }) => {
  return (
    <ItemGrid key={id}>
      <div>{name}</div>
      <div> {formatMoney(price)}</div>
      <div>{description}</div>
    </ItemGrid>
  );
};

export default ChooseProtein;
