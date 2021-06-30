import { Grid } from "@material-ui/core";
import styled from "styled-components";

export default function AddItem({
  name,
  price,
  description,
  stock,
  vegitarian,
}) {
  const ingredientStyle = styled.div`
    // grid display?
    // eventually add an image
    // checkbox for yes no?
    // split each category into their own component?
  `;
  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <Grid container xs={12}>
          <Grid item xs={4}>
            <h1>{name}</h1>
          </Grid>
          <Grid item xs={4}>
            <p>{description}</p>
          </Grid>
          <Grid item xs={4}>
            <h6>{price}</h6>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
