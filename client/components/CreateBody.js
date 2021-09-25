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
import Checkbox from "@mui/material/Checkbox";
// Will import these later when I figure out how to export everything from file to file
// import handleToppingChange from "./CheckboxHandleChanges/HandleToppingChange";
// import handleCheeseChange from "./CheckboxHandleChanges/HandleCheeseChange";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "./AccordianStyles";

export const DISPLAY_TOPPINGS_QUERY = gql`
  query DISPLAY_TOPPINGS_QUERY {
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
  // use hook to fetch data
  const { data, error, loading } = useQuery(DISPLAY_TOPPINGS_QUERY);
  // loading
  if (loading) return <p>Loading...</p>;

  // Here we have the Panel Accordion logic
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Our Checkbox Logic ------------------------------------------

  // Protein Logic
  const [proteinState, setProteinState] = React.useState(null);
  const handleProtein = (id) => (event, newExpanded) => {
    setProteinState(newExpanded ? id : null);
  };

  // Topping Logic
  const [toppingChecked, setToppingChecked] = React.useState(
    new Array(data.allToppings.length).fill(null)
  );
  const handleToppingChange = (position, id) => {
    const updatedCheckedToppingState = toppingChecked.map(
      (item, index) => {
        if (index === position) {
          if (item === null) {
            return id;
          } else {
            return null;
          }
        } else {
          return item;
        }
      }
      // (index === position ? !item : item)
      // index === position ? id : null
    );

    setToppingChecked(updatedCheckedToppingState);
    console.log(toppingChecked);

    const totalPrice = updatedCheckedToppingState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + data.allToppings[index].price;
        }
        return sum;
      },
      0
    );

    //   setTotal(totalPrice);
  };

  // Cheese Logic
  const [cheeseChecked, setCheeseChecked] = React.useState(
    new Array(data.allCheeses.length).fill(null)
  );

  const handleCheeseChange = (position, id) => {
    const updatedCheckedCheeseState = cheeseChecked.map(
      (item, index) => {
        if (index === position) {
          if (item === null) {
            return id;
          } else {
            return null;
          }
        } else {
          return item;
        }
      }
      // (index === position ? !item : item)
      // index === position ? id : null
    );

    setCheeseChecked(updatedCheckedCheeseState);
    console.log(cheeseChecked);

    const totalPrice = updatedCheckedCheeseState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + data.allCheeses[index].price;
        }
        return sum;
      },
      0
    );

    //   setTotal(totalPrice);
  };

  // Condiment Logic
  const [condimentChecked, setCondimentChecked] = React.useState([]);

  // Total Cost Logic
  const [total, setTotal] = useState(0);

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
                      <Checkbox
                        checked={proteinState === `${id}`}
                        onChange={handleProtein(id)}
                        id={id}
                        name={name}
                        value={price}
                      />
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
                ({ name, id, description, price, stock }, index) => (
                  <ItemContainerGrid container spacing={2}>
                    <Grid item xs={2}>
                      <Checkbox
                        checked={toppingChecked[index]}
                        onChange={() => handleToppingChange(index, id)}
                        id={id}
                        name={name}
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
                ({ name, id, description, price, stock }, index) => (
                  <ItemContainerGrid container spacing={2}>
                    <Grid item xs={2}>
                      <Checkbox
                        checked={cheeseChecked[index]}
                        onChange={() => handleCheeseChange(index, id)}
                        id={id}
                        name={name}
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
