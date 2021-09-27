import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import formatMoney from "../lib/formatMoney";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function SelectionComponent({
  name,
  id,
  price,
  description,
  multiple,
}) {
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid item xs={10} key={id}>
      <Grid container>
        <Grid item xs={4}>
          {name}
        </Grid>
        <Grid item xs={4}>
          {" "}
          {formatMoney(price)}
        </Grid>
        <Grid item xs={4}>
          {description}
        </Grid>
      </Grid>
    </Grid>
  );
}
