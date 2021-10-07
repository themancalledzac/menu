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
  let initialPrice = inputs.protein.price;

  const FormComponent = inputs;
  // early-out when nothing to render
  if (!FormComponent) return null;

  // const initialValues = Object.values(initial).join("");

  useEffect(() => {
    // this function runs when the things we are watching change
  }, [inputs]);

  function handleSubmit(name, value, price) {
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
    });
  }

  function handlePrice(operator, type, value) {
    // let totalPrice = inputs.price;
    let oldPrice = parseInt(inputs.protein.price);
    let newValue = parseInt(value);
    let plusPrice = (inputs.price += newValue);
    console.log(value);
    console.log(newValue);
    console.log(inputs.price);
    console.log(plusPrice);
    let minusPrice = (inputs.price -= oldPrice);
    console.log(parseInt(newValue));
    if (operator === "add") {
      setInputs({
        ...inputs,
        price: parseInt(plusPrice),
      });
    } else if (operator === "sub") {
      setInputs({
        ...inputs,
        price: parseInt(minusPrice),
      });
    }
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

  async function handleChange(e) {
    let { name, index, id, type, value } = e.target;
    console.log(e.target);

    // protein logic
    if (name === "protein") {
      let proteinState = inputs.protein.id;
      let proteinPrice = parseInt(inputs.protein.price);
      let newPrice = parseInt(value);
      if (proteinState != id) {
        let val = { id: id, price: value };
        await handlePrice("sub", proteinPrice, "protein");
        await handleSubmit(name, val);
        await handlePrice("add", newPrice);
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
  }

  function handleToppingChange(id) {
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
    handleChange,
    resetForm,
    handleToppingChange,
    handleCheeseChange,
    handleCondimentChange,
    ifExists,
  };
}
