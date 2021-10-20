import { useQuery } from "@apollo/client";
import { array } from "prop-types";
import { useEffect, useState } from "react";
import { ALL_PRODUCTS_QUERY } from "../components/graph_ql_queries/ALL_PRODUCTS_QUERY";
import { useUser } from "../components/graph_ql_queries/User";
import removeNull from "./removeNull";

// loading

export default function createForm(initial = {}) {
  // const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  // // create a state object for our inputs

  const [inputs, setInputs] = useState(initial);
  const [cost, setCosts] = useState(inputs.price);
  const [prevProtCost, setPrevProtCost] = useState(250);
  const user = useUser();
  // let initialPrice = inputs.protein.price;

  useEffect(() => {
    // this function runs when the things we are watching change
  }, [inputs]);

  function setUser() {
    user
      ? setInputs({
          ...inputs,
          user: {
            id: user.id,
          },
        })
      : setInputs({
          ...inputs,
          user: {
            id: "616f37887692a0d6fb1478ce",
          },
        });
  }

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

  function updatePrice(newValue, oldValue, type) {
    let currentV = inputs.price;
    let oldV = parseInt(oldValue);
    let newV = parseInt(newValue);
    let newTotal = currentV + newV - oldV;
    if (type === "protein") {
      setPrevProtCost(newV);
    }
    return parseInt(newTotal);
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

  async function addUser(user) {
    let val = { id: user.id };
    await setInputs(
      {
        ...inputs,
        user: val,
      },
      console.log(inputs)
    );
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
        const newPrice = await updatePrice(proteinValue, oldPrice, "protein");
        let val = { id: id };
        await handleSubmit(name, val, newPrice);
        // console.log(inputs);
      }
    }
    // text and signin logic
    else {
      setInputs({
        ...inputs,
        [name]: value,
      });
    }
    console.log(inputs);
  }

  async function handleToppingChange(id, price, type) {
    let state = inputs;
    if (type === "topping") {
      state = inputs.topping;
    } else if (type === "cheese") {
      state = inputs.cheese;
    } else if (type === "condiment") {
      state = inputs.condiment;
    }

    if (ifExists(id, state)) {
      let newPrice = await updatePrice(0, price);
      setInputs(
        {
          ...inputs,
          price: newPrice,
          [type]: ifExistsFilter(id, state),
        },
        console.log(`Updated ${type} State: Removed ${id} from state.`)
      );
    } else {
      let newPrice = await updatePrice(price, 0);
      setInputs({
        ...inputs,
        price: newPrice,
        [type]: addItem(id, state),
      });
    }
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
    ifExists,
    addUser,
    setUser,
  };
}
