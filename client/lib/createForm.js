import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ALL_PRODUCTS_QUERY } from "../components/graph_ql_queries/ALL_PRODUCTS_QUERY";

// loading

export default function createForm(initial = {}) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <p>Loading...</p>;
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);
  const [proteinState, setProteinState] = useState(null);
  const [toppingState, toppingSetState] = useState(
    new Array(data.allToppings.length).fill(null)
  );
  const [cheeseState, cheeseSetState] = useState(
    new Array(data.allCheeses.length).fill(null)
  );
  const [condimentState, condimentSetState] = useState(
    new Array(data.allCheeses.length).fill(null)
  );
  const initialValues = Object.values(initial).join("");

  useEffect(() => {
    // function that runs when we change our inputs
  }, [initialValues]);

  function handleChange(e) {
    let { value, name, index, id, type } = e.target;

    // protein logic
    if (type === "protein") {
      // if protein let's:
      // 1. Check proteinstate, if the same, do nothing.
      // 2. if different, setProteinState, and then setInputs state
      if (!id === proteinState) {
        setProteinState(id);
        setInputs({
          ...inputs,
          [name]: { id: proteinState },
        }),
          console.log(inputs);
      }
    }

    // all other logic
    if (type === "multi") {
      // let's see if we can make this one for all three!
      // will need to pass the name as a template literal
      // will need to find a regex way of capitalizing the topping name for the others
      if (name === "topping") {
        const updatedCheckedToppingState = toppingState.map((item, index) => {
          if (index === position) {
            if (item === null) {
              return id;
            } else {
              return null;
            }
          } else {
            return item;
          }
        });
        toppingSetState(updatedCheckedToppingState);
        const removedNullArray = removeNull(toppingState);

        setInputs(
          {
            ...inputs,
            [name]: removedNullArray,
          },
          console.log(inputs)
        );
      }
      if (name === "cheese") {
        const updatedCheckedCheeseState = cheeseState.map((item, index) => {
          if (index === position) {
            if (item === null) {
              return id;
            } else {
              return null;
            }
          } else {
            return item;
          }
        });
        cheeseSetState(updatedCheckedCheeseState);
        const removedNullArray = removeNull(cheeseState);

        setInputs(
          {
            ...inputs,
            [name]: removedNullArray,
          },
          console.log(inputs)
        );
      }
      if (name === "condiment") {
        const updatedCheckedCondimentState = condimentState.map(
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
        );
        condimentSetState(updatedCheckedCondimentState);
        const removedNullArray = removeNull(condimentState);

        setInputs(
          {
            ...inputs,
            [name]: removedNullArray,
          },
          console.log(inputs)
        );
      }
    }
  }

  function resetForm() {
    setInputs(initial);
  }

  // function handleChange(e) {
  //   let { id, name, price } = e.target;

  //   setInputs({
  //     //copy the existing state
  //     ...inputs,
  //     // using a variable for what we are targeting
  //     [name]: value,
  //     [price]: (price += price),
  //   });
  // }

  return {
    inputs,
    handleChange,
  };
}

// this 'handleChange' only occur
