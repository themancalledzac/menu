import styled from "styled-components";

export default function AddItem({
  name,
  price,
  description,
  stock,
  vegitarian,
}) {
  return (
    <div container xs={12}>
      <div item xs={12}>
        <div container xs={12}>
          <div item xs={4}>
            <h1>{name}</h1>
          </div>
          <div item xs={4}>
            <p>{description}</p>
          </div>
          <div item xs={4}>
            <h6>{price}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
