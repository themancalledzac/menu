import { useQuery } from "@apollo/client";
import { array } from "prop-types";
import { useEffect, useState } from "react";
import { ALL_PRODUCTS_QUERY } from "../components/graph_ql_queries/ALL_PRODUCTS_QUERY";
import removeNull from "./removeNull";

// loading

export default function createForm(initial = {}) {
  // const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  // // create a state object for our inputs
  //   if (loading) return <p>Loading...</p>;

  const [inputs, setInputs] = useState(initial);
  const [cost, setCosts] = useState(inputs.price);
  const [prevProtCost, setPrevProtCost] = useState(250);
  let initialPrice = inputs.protein.price;

  useEffect(() => {
    // this function runs when the things we are watching change
  }, [inputs]);

  function handleSubmit(name, value, price) {
    console.log(name);
    console.log(inputs);
    setInputs(
      {
        ...inputs,
        price: price,
        [name]: value,
      },
      console.log(inputs)
    );
  }

  function ifExists(id, array) {
    return array.some(function (el) {
      return el.id === id;
    });
  }

  function updatePrice(newValue, oldValue) {
    let currentV = inputs.price;
    let oldV = parseInt(oldValue);
    let newV = parseInt(newValue);
    let newTotal = currentV + newV - oldV;
    setPrevProtCost(newV);
    return parseInt(newTotal);
  }

  // function calculateTotal(type) {
  //   array = inputs.topping;
  //   return parseInt(array.reduce((n, { price }) => n + price, 0));
  // }

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

  async function handleChange(e) {
    let { name, id, type, value } = e.target;
    console.log(e.target);

    // protein logic
    if (name === "protein") {
      let proteinId = inputs.protein.id;
      // if we click on a NEW protein
      if (proteinId != id) {
        // find and subtract initial protein cost
        let oldPrice = parseInt(prevProtCost);
        const proteinValue = parseInt(value);
        const newPrice = await updatePrice(proteinValue, oldPrice);
        let val = { id: id };
        await handleSubmit(name, val, newPrice);
        // console.log(inputs);
      }
    }
    // text logic
    else if (type === "text") {
      setInputs({
        ...inputs,
        [name]: value,
      });
    }
    console.log(inputs);
  }

  function handleToppingChange(id, price) {
    let toppingState = inputs.topping;
    console.log(toppingState);
    // const numValue = parseInt(price);
    // let currentToppingPrice = parseInt(calculateTotal("topping"));
    // const plusPrice = updatePrice(numValue, oldPrice);
    // console.log("our initital cost of all toppings");
    // console.log(typeof oldPrice);
    // console.log(oldPrice);
    // console.log("our new total price for the burger after toppings included");
    // console.log(typeof newPrice);
    // console.log(newPrice);
    // minusCost = removeToppingCost(id);
    ifExists(id, toppingState)
      ? setInputs(
          {
            ...inputs,
            // price: newPrice,
            ["topping"]: ifExistsFilter(id, toppingState),
          },
          console.log(`Updated topping State: Removed ${id} from state.`)
        )
      : setInputs({
          ...inputs,
          // price: newPrice,
          ["topping"]: addItem(id, toppingState),
        });
  }

  function handleCheeseChange(id) {
    let cheeseState = inputs.cheese;
    console.log(cheeseState);
    ifExists(id, cheeseState)
      ? setInputs(
          {
            ...inputs,
            ["cheese"]: ifExistsFilter(id, cheeseState),
          },
          console.log(`Updated cheese State: Removed ${id} from state.`)
        )
      : setInputs({
          ...inputs,
          ["cheese"]: addItem(id, cheeseState),
        });
  }

  function handleCondimentChange(id) {
    let condimentState = inputs.condiment;
    console.log(condimentState);
    ifExists(id, condimentState)
      ? setInputs(
          {
            ...inputs,
            ["condiment"]: ifExistsFilter(id, condimentState),
          },
          console.log(`Updated condiment State: Removed ${id} from state.`)
        )
      : setInputs({
          ...inputs,
          ["condiment"]: addItem(id, condimentState),
        });
  }

  function resetForm() {
    setInputs({ initial }, handleSubmit);
  }

  return {
    inputs,
    cost,
    handleChange,
    resetForm,
    handleToppingChange,
    handleCheeseChange,
    handleCondimentChange,
    ifExists,
  };
}
