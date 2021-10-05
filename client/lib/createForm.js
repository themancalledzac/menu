import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ALL_PRODUCTS_QUERY } from "../components/graph_ql_queries/ALL_PRODUCTS_QUERY";
import removeNull from "./removeNull";

// loading

export default function createForm(initial = {}) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <p>Loading...</p>;
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);
  const [proteinState, setProteinState] = useState("61367bfe4b1b1b9fdf6e7787");
  const [toppingState, toppingSetState] = useState(
    new Array(data.allToppings.length).fill(null)
  );
  const [cheeseState, cheeseSetState] = useState(
    new Array(data.allCheeses.length).fill(null)
  );
  const [condimentState, condimentSetState] = useState(
    new Array(data.allCheeses.length).fill(null)
  );

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  function handleSubmit(name, value) {
    console.log(name);
    console.log(inputs);
    setInputs(
      {
        ...inputs,
        [name]: value,
      },
      console.log(inputs)
    );
  }

  function ifExists(id, array) {
    return array.some(function (el) {
      return el.id === id;
      console.log("success");
    });
  }

  function ifExistsFilter(id, array) {
    let newArray = array.filter((el) => el.id !== id);
    console.log(newArray);
    return newArray;
  }

  function addItem(id, array) {
    let obj = { id: id };
    console.log(obj);
    console.log(array);
    let newArray = array.concat(obj);
    console.log(newArray);
    return newArray;
  }

  function handleChange(e) {
    let { name, index, id, type, value } = e.target;
    console.log(e.target);

    // protein logic
    if (name === "protein") {
      value = { id: id };
      handleSubmit(name, value);
    }
    // text logic
    else if (type === "text") {
      setInputs({
        ...inputs,
        [name]: value,
      });
    }
    // all other logic
    else {
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
    console.log(inputs);
  }

  // CURRENT ISSUE TODO:
  // ------------------------ TODO: --------------------------------
  //
  // It seems that handleToppingChange is updating our position or location of whatever item is in the array, forcing a refresh loop.
  // let's look into why the position, or the item keeps refreshing it should only be called once, and update and RETURN maybe? maybe we need to return to exit the loop?

  function handleToppingChange(index, id, name) {
    // let { id, index, name, value } = e.target;
    let toppingState = inputs.topping;
    console.log(toppingState);
    ifExists(id, toppingState)
      ? setInputs(
          {
            ...inputs,
            ["topping"]: ifExistsFilter(id, toppingState),
          },
          console.log(`Updated topping State: Removed ${id} from state.`)
        )
      : setInputs({
          ...inputs,
          ["topping"]: addItem(id, toppingState),
        });
  }

  function handleCheeseChange(id) {}

  // console.log(toppingState);
  // const testing = removedNullArray.map((value) => ({ ["id"]: value }));

  function resetForm() {
    setInputs({ initial }, handleSubmit);
  }

  return {
    inputs,
    handleChange,
    proteinState,
    toppingState,
    cheeseState,
    condimentState,
    resetForm,
    handleToppingChange,
    ifExists,
  };
}

// this 'handleChange' only occur
