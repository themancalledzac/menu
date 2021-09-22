import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import AddItem from "./AddItem";
import SelectionComponent from "./SelectionComponent";
import { useState } from "react";
import ItemGrid from "./ItemGrid";
import ClickGrid from "./ClickGrid";
import { CheckBox } from "./CheckBox";
import { CheckBoxContainer } from "./CheckBoxContainer";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "./AccordianStyles";

export const BUILD_BURGER_QUERY = gql`
  query BUILD_BURGER_QUERY {
    allToppings {
      id
      description
      name
      price
      stock
    }
    allProteins {
      id
      description
      name
      price
      stock
    }
    allCheeses {
      id
      description
      name
      price
      stock
    }
    allCondiments {
      id
      description
      name
      price
      stock
    }
  }
`;

const Header = styled("div")({
  alignContent: "center",
  alignItems: "center",
  position: "flex",
  textAlign: "center",
});
const StyledTypo = styled(Typography)({
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: "4rem",
});

const ItemContainerGrid = styled(Grid)({
  marginBottom: "2rem",
});

export default function CreateBody() {
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // use hook to fetch data
  const { data, error, loading } = useQuery(BUILD_BURGER_QUERY);

  // loading
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <Header>
          <StyledTypo variant='h4' component='div' gutterBottom>
            Create a burger
          </StyledTypo>
          <p>
            Please go through the required selections below to create a burger
          </p>
        </Header>
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls={"panel1d-content"}
              id={"panel1d-header"}
            >
              <Typography>Protein</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {data.allProteins.map(
                ({ name, id, description, price, stock }) => (
                  <ItemContainerGrid container spacing={2}>
                    <Grid item xs={2}>
                      <input
                        type='radio'
                        id={id}
                        checked='unchecked'
                        name='radio'
                      ></input>
                    </Grid>
                    <SelectionComponent
                      key={id}
                      name={name}
                      price={price}
                      description={description}
                      multiple={false}
                    />
                  </ItemContainerGrid>
                )
              )}
            </AccordionDetails>
          </Accordion>
        </div>

        <div>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls={"panel2d-content"}
              id={"panel2d-header"}
            >
              <Typography>Topping</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {data.allToppings.map(
                ({ name, id, description, price, stock }) => (
                  <ItemContainerGrid container spacing={2}>
                    <Grid item xs={2}>
                      <input
                        type='radio'
                        id={id}
                        checked='unchecked'
                        name='radio'
                      ></input>
                    </Grid>
                    <SelectionComponent
                      key={id}
                      name={name}
                      price={price}
                      description={description}
                      multiple={true}
                    />
                  </ItemContainerGrid>
                )
              )}
            </AccordionDetails>
          </Accordion>
        </div>

        <div>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls={"panel3d-content"}
              id={"panel3d-header"}
            >
              <Typography>Cheese</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {data.allCheeses.map(
                ({ name, id, description, price, stock }) => (
                  <ItemContainerGrid container spacing={2}>
                    <Grid item xs={2}>
                      <input
                        type='radio'
                        id={id}
                        checked='unchecked'
                        name='radio'
                      ></input>
                    </Grid>
                    <SelectionComponent
                      key={id}
                      name={name}
                      price={price}
                      description={description}
                      multiple={true}
                    />
                  </ItemContainerGrid>
                )
              )}
            </AccordionDetails>
          </Accordion>
        </div>

        <div>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls={"panel4d-content"}
              id={"panel4d-header"}
            >
              <Typography>Condiments</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {data.allCondiments.map(
                ({ name, id, description, price, stock }) => (
                  <ItemContainerGrid container spacing={2}>
                    <Grid item xs={2}>
                      <input
                        type='radio'
                        id={id}
                        checked='unchecked'
                        name='radio'
                      ></input>
                    </Grid>
                    <SelectionComponent
                      key={id}
                      name={name}
                      price={price}
                      description={description}
                      multiple={true}
                    />
                  </ItemContainerGrid>
                )
              )}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
