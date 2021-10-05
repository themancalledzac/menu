import * as React from "react";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";
import AddItem from "./AddItem";
import SelectionComponent from "./SelectionComponent";
import { useState } from "react";
import ItemGrid from "./ItemGrid";
import ClickGrid from "./ClickGrid";
import { CheckBox } from "./CheckBox";
import { CheckBoxContainer } from "./CheckBoxContainer";
import { Button, inputClasses, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import { ALL_PRODUCTS_QUERY } from "./graph_ql_queries/ALL_PRODUCTS_QUERY";
// Will import these later when I figure out how to export everything from file to file
// import handleToppingChange from "./CheckboxHandleChanges/HandleToppingChange";
// import handleCheeseChange from "./CheckboxHandleChanges/HandleCheeseChange";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "./AccordianStyles";
import removeNull from "../lib/removeNull";
import createForm from "../lib/createForm";

export const CREATE_BURGER_MUTATION = gql`
  mutation CREATE_BURGER_MUTATION(
    $name: String
    $description: String
    $protein: ProteinWhereUniqueInput
    $topping: [ToppingWhereUniqueInput]
    $cheese: [CheeseWhereUniqueInput]
    $condiment: [CondimentWhereUniqueInput]
  ) {
    createBurger(
      data: {
        name: $name
        description: $description
        protein: { connect: $protein }
        topping: { connect: $topping }
        cheese: { connect: $cheese }
        condiment: { connect: $condiment }
      }
    ) {
      id
      name
      description
      price
      protein {
        id
      }
      topping {
        id
      }
      cheese {
        id
      }
      condiment {
        id
      }
    }
  }
`;
// mutation AddNewPet ($name: String!, $petType: PetType) {
//   addPet(name: $name, petType: $petType) {
//     id
//     name
//     petType
//   }
// }

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

  const {
    inputs,
    toppingState,
    cheeseState,
    condimentState,
    handleChange,
    handleToppingChange,
  } = createForm({
    name: "",
    description: "",
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
    cheese: [],
    condiment: [],
  });

  // Mutation to create the burger
  // I believe we need to change the logic, that when we actually click SUBMIT, our logic will state that we need to AT THAT POINT update our main state that contains our whole burger. all state on the page is basically local state via each respective topping/protein/etc, UNTIL we hit SUBMIT, and then we update our 'currentValues' state, and THEN push that state with our useMutation.
  // Let's look into using the useForm file, ONLY for our actual submit function. keeping all that jazz in there will be nice.

  const [createBurger, { createLoading, createError, createData }] =
    useMutation(CREATE_BURGER_MUTATION, {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    });

  // -------------------------------- OLD LOGIC ----------------------------------
  // const test = {
  //   name: "burgerName",
  //   description: "burgerDescript",
  //   protein: {
  //     id: "61367bfe4b1b1b9fdf6e778b",
  //   },
  //   topping: [
  //     {
  //       id: "61367bfc4b1b1b9fdf6e776f",
  //     },
  //     {
  //       id: "61367bfc4b1b1b9fdf6e7772",
  //     },
  //   ],
  //   cheese: [
  //     {
  //       id: "61367bff4b1b1b9fdf6e7798",
  //     },
  //   ],
  //   condiment: [
  //     {
  //       id: "61367c004b1b1b9fdf6e77a5",
  //     },
  //   ],
  // };

  // const [currentValues, setCurrentValues] = useState(initial);
  // // const initialValues = Object.values(currentValues).join("");

  // React.useEffect(() => {
  //   // this function runs when the things we are watching change
  // }, [currentValues]);

  // console.log(test);
  // console.log(currentValues);
  // ---------------------------------------------------------------------------------

  // const submitBurger = (e) => {
  //   e.preventDefault();
  //   createBurger();
  //   }
  // };

  // use hook to fetch data
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  // loading
  if (loading) return <p>Loading...</p>;

  let proteinState = inputs.protein.id;
  let toppingSt = inputs.topping;
  // console.log(toppingSt);

  // Here we have the Panel Accordion logic
  const [expanded, setExpanded] = React.useState("panel1");
  const handleAccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const proteinAccordion = () => {
    setExpanded("panel2");
  };
  // Our Checkbox Logic ------------------------------------------

  // // Protein Logic
  // const [proteinState, setProteinState] = React.useState(null);
  // const handleProtein = (id) => (event, newExpanded) => {
  //   setProteinState(id);
  //   // const handleProtein = (id) => {
  //   //   const proteinFinal = (id) => {
  //   //     if (id === proteinState) {
  //   //       return null;
  //   //     } else {
  //   //       return id;
  //   //     }
  //   //   };
  //   //   setProteinState(proteinFinal);

  //   expanded === "panel1" && setExpanded("panel2");

  //   setCurrentValues(
  //     {
  //       ...currentValues,
  //       ["protein"]: { id: proteinState },
  //     },
  //     console.log(currentValues)
  //   );
  // };

  // // Topping Logic
  // const [handleChange, setToppingChecked] = React.useState(
  //   new Array(data.allToppings.length).fill(null)
  // );
  // const handleToppingChange = (position, id) => {
  //   const updatedCheckedToppingState = toppingChecked.map(
  //     (item, index) => {
  //       if (index === position) {
  //         if (item === null) {
  //           return id;
  //         } else {
  //           return null;
  //         }
  //       } else {
  //         return item;
  //       }
  //     }
  //     // (index === position ? !item : item)
  //     // index === position ? id : null
  //   );
  //   console.log(toppingChecked);

  //   setToppingChecked(updatedCheckedToppingState);
  //   console.log(toppingChecked);
  //   const removedNullArray = removeNull(toppingChecked);
  //   // const testing = removedNullArray.map((value) => ({ ["id"]: value }));
  //   setCurrentValues(
  //     {
  //       ...currentValues,
  //       ["topping"]: removedNullArray,
  //     },
  //     console.log(currentValues)
  //   );

  //   const totalPrice = updatedCheckedToppingState.reduce(
  //     (sum, currentState, index) => {
  //       if (currentState === true) {
  //         return sum + data.allToppings[index].price;
  //       }
  //       return sum;
  //     },
  //     0
  //   );

  //   //   setTotal(totalPrice);
  // };

  // // Cheese Logic
  // const [cheeseChecked, setCheeseChecked] = React.useState(
  //   new Array(data.allCheeses.length).fill(null)
  // );

  // const handleCheeseChange = (position, id) => {
  //   const updatedCheckedCheeseState = cheeseChecked.map(
  //     (item, index) => {
  //       if (index === position) {
  //         if (item === null) {
  //           return id;
  //         } else {
  //           return null;
  //         }
  //       } else {
  //         return item;
  //       }
  //     }
  //     // (index === position ? !item : item)
  //     // index === position ? id : null
  //   );

  //   setCheeseChecked(updatedCheckedCheeseState);
  //   console.log(cheeseChecked);
  //   const removedNullArray = removeNull(cheeseChecked);
  //   setCurrentValues(
  //     {
  //       ...currentValues,
  //       ["cheese"]: removedNullArray,
  //     },
  //     console.log(currentValues)
  //   );

  //   const totalPrice = updatedCheckedCheeseState.reduce(
  //     (sum, currentState, index) => {
  //       if (currentState === true) {
  //         return sum + data.allCheeses[index].price;
  //       }
  //       return sum;
  //     },
  //     0
  //   );

  //   //   setTotal(totalPrice);
  // };

  // // Condiment Logic
  // const [condimentChecked, setCondimentChecked] = React.useState(
  //   new Array(data.allCondiments.length).fill(null)
  // );

  // const handleCondimentChange = (position, id) => {
  //   const updatedCheckedCondimentState = condimentChecked.map(
  //     (item, index) => {
  //       if (index === position) {
  //         if (item === null) {
  //           return id;
  //         } else {
  //           return null;
  //         }
  //       } else {
  //         return item;
  //       }
  //     }
  //     // (index === position ? !item : item)
  //     // index === position ? id : null
  //   );

  //   setCondimentChecked(updatedCheckedCondimentState);
  //   console.log(condimentChecked);
  //   const removedNullArray = removeNull(condimentChecked);
  //   setCurrentValues(
  //     {
  //       ...currentValues,
  //       ["condiment"]: removedNullArray,
  //     },
  //     console.log(currentValues)
  //   );

  //   const totalPrice = updatedCheckedCondimentState.reduce(
  //     (sum, currentState, index) => {
  //       if (currentState === true) {
  //         return sum + data.allCondiments[index].price;
  //       }
  //       return sum;
  //     },
  //     0
  //   );

  //   //   setTotal(totalPrice);
  // };

  // function handleChange(e) {
  //   let { value, name } = e.target;
  //   setCurrentValues({
  //     ...currentValues,
  //     [name]: value,
  //   });
  // }

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
                    <Grid item xs={2}>
                      <Checkbox
                        checked={proteinState === id}
                        onChange={handleChange}
                        type='checkbox'
                        value={proteinState}
                        id={id}
                        name='protein'
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
                        checked={toppingState[index]}
                        onChange={() => handleToppingChange(index, id, name)}
                        position={index}
                        index={index}
                        id={id}
                        name='topping'
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
                        checked={cheeseState[index]}
                        onChange={handleChange}
                        index={index}
                        id={id}
                        name='cheese'
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
                        checked={condimentState[index]}
                        onChange={handleChange}
                        index={index}
                        id={id}
                        name='condiment'
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
      </div>
    </div>
  );
}
