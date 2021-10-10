import * as React from "react";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";
import SelectionComponent from "./SelectionComponent";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import { ALL_PRODUCTS_QUERY } from "./graph_ql_queries/ALL_PRODUCTS_QUERY";
import { CREATE_BURGER_MUTATION } from "./graph_ql_queries/CREATE_BURGER_MUTATION";
// Will import these later when I figure out how to export everything from file to file
// import handleToppingChange from "./CheckboxHandleChanges/HandleToppingChange";
// import handleCheeseChange from "./CheckboxHandleChanges/HandleCheeseChange";

// TODO:
// 1. When creating burger, add it to the 'shopping cart'? which means we need to add this to local storage.
// 1.5. If we are logged in, creating a burger adds it to the logged in cart data, which persists as the users database
// 2. when checking out, have an option to 'save burger' to the main burger database
// 3. In our standard 'inputs' state, we need to add a 'price' for every item, or object, such as:
// protein: {
// id: 2309u203493,
// price: 2500
// }
//

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "./AccordianStyles";
import createForm from "../lib/createForm";

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
  /* 
  ------------------------------------------------------
  Here lies our connection to our createForm
  ------------------------------------------------------
  */

  const { inputs, cost, handleChange, handleToppingChange, ifExists } =
    createForm({
      name: "",
      description: "",
      price: 440,
      protein: {
        id: "61367bfe4b1b1b9fdf6e7787",
      },
      topping: [
        {
          id: "61367bfc4b1b1b9fdf6e776f",
        },
        {
          id: "61367bfc4b1b1b9fdf6e7772",
        },
        {
          id: "61367bfc4b1b1b9fdf6e7776",
        },
      ],
      cheese: [
        {
          id: "61367bff4b1b1b9fdf6e7798",
        },
      ],
      condiment: [
        {
          id: "61367c004b1b1b9fdf6e77a1",
        },
      ],
    });

  // Here we have the Panel Accordion logic
  const [expanded, setExpanded] = React.useState("panel1");
  const handleAccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [createBurger, { createLoading, createError, createData }] =
    useMutation(CREATE_BURGER_MUTATION, {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    });
  if (createLoading) return <p>Loading...</p>;

  // use hook to fetch data
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  // loading
  if (loading) return <p>Loading...</p>;

  // console.log(inputs);
  // console.log(inputs.protein);
  // console.log(inputs.protein.id);
  let proteinState = inputs.protein.id;

  return (
    <div>
      <div>
        <fieldset disabled={loading} aria-busy={loading}>
          <Header>
            <StyledTypo variant='h4' component='div' gutterBottom>
              Create a burger
            </StyledTypo>
            <p>
              Please go through the required selections below to create a burger
            </p>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Burger Name'
              value={inputs.name}
              onChange={handleChange}
            />
            <input
              type='text'
              id='description'
              name='description'
              placeholder='Burger Description'
              value={inputs.description}
              onChange={handleChange}
            />
            {inputs.price}
            ---
            {cost}
          </Header>
          <div>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleAccordion("panel1")}
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
                    <ItemContainerGrid container spacing={2} key={id}>
                      {{ stock } && (
                        <Grid item xs={2}>
                          <Checkbox
                            checked={proteinState === id}
                            onChange={handleChange}
                            type='checkbox'
                            value={price}
                            id={id}
                            name='protein'
                          />
                        </Grid>
                      )}
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
              onChange={handleAccordion("panel2")}
            >
              <AccordionSummary
                aria-controls={"panel2d-content"}
                id={"panel2d-header"}
              >
                <Typography>Topping</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {data.allToppings.map(
                  ({ name, id, description, price, stock }, index) => (
                    <ItemContainerGrid container spacing={2} key={id}>
                      <Grid item xs={2}>
                        <Checkbox
                          checked={ifExists(id, inputs.topping)}
                          onChange={() =>
                            handleToppingChange(id, price, "topping")
                          }
                          id={id}
                          value={price}
                        />
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
              onChange={handleAccordion("panel3")}
            >
              <AccordionSummary
                aria-controls={"panel3d-content"}
                id={"panel3d-header"}
              >
                <Typography>Cheese</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {data.allCheeses.map(
                  ({ name, id, description, price, stock }, index) => (
                    <ItemContainerGrid container spacing={2} key={id}>
                      <Grid item xs={2}>
                        <Checkbox
                          checked={ifExists(id, inputs.cheese)}
                          onChange={() =>
                            handleToppingChange(id, price, "cheese")
                          }
                          index={index}
                          id={id}
                          value={price}
                        />
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
              onChange={handleAccordion("panel4")}
            >
              <AccordionSummary
                aria-controls={"panel4d-content"}
                id={"panel4d-header"}
              >
                <Typography>Condiments</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {data.allCondiments.map(
                  ({ name, id, description, price, stock }, index) => (
                    <ItemContainerGrid container spacing={2} key={id}>
                      <Grid item xs={2}>
                        <Checkbox
                          checked={ifExists(id, inputs.condiment)}
                          onChange={() =>
                            handleToppingChange(id, price, "condiment")
                          }
                          id={id}
                          value={price}
                        />
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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>
                  Submit Burger, while also adding it to your cart
                </Typography>
                <Button
                  onClick={async (e) => {
                    e.preventDefault();
                    // submit input fields to the backend.
                    await createBurger();
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
