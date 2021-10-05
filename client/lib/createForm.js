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
  const initialValues = Object.values(initial).join("");

  useEffect(() => {
    // function that runs when we change our inputs]
    console.log(toppingState);
    // console.log(inputs);
    // console.log(initialValues);
  }, [toppingState]);
  useEffect(() => {
    console.log(inputs);
  }, [inputs]);
  useEffect(() => {
    console.log(proteinState);
  }, [proteinState]);

  async function handleProteinChange(e) {
    let { name, id } = e.target;
    console.log(e.target.id);

    setProteinState(id), handleSubmit(name);
  }

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

  function handleChange(e) {
    let { name, index, id, type, value } = e.target;
    console.log(e.target);
    console.log(toppingState);

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
      // let's see if we can make this one for all three!
      // will need to pass the name as a template literal
      // will need to find a regex way of capitalizing the topping name for the others
      if (name === "topping") {
        console.log(inputs.topping);
        const updatedCheckedToppingState = toppingState.map((item, i) => {
          if (i === index) {
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
    console.log(inputs);
  }

  // CURRENT ISSUE TODO:
  // ------------------------ TODO: --------------------------------
  //
  // It seems that handleToppingChange is updating our position or location of whatever item is in the array, forcing a refresh loop.
  // let's look into why the position, or the item keeps refreshing it should only be called once, and update and RETURN maybe? maybe we need to return to exit the loop?

  function handleToppingChange(index, id) {
    // let { id, index, name, value } = e.target;
    let position = index;
    let type = "topping";
    // console.log(e.target);

    // idea instead. INSTEAD of simply having a preset array of null, but the length of our number or toppings, we could instead have a blank array, and add / remove items if they exist in the array or not. if they exist, we remove, if not, we add.
    (async () => {
      const updatedCheckedToppingState = await toppingState.map(
        (item, index) => {
          // console.log(item);
          // console.log(index);
          // console.log(position);
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
      // console.log(toppingState);
      await toppingSetState(updatedCheckedToppingState);
      const removedNullArray = await removeNull(toppingState);
      console.log(removedNullArray);
      await updateState(removedNullArray, type);
    })();

    // setInputs({
    //   ...inputs,
    //   ["topping"]: removedNullArray,
    // });
    // console.log(inputs);
  }

  function updateState(array, type) {
    console.log(`update ${type}`);
    console.log(array);
    setInputs({
      ...inputs,
      [type]: array,
    });
  }

  // console.log(toppingState);
  // const testing = removedNullArray.map((value) => ({ ["id"]: value }));

  function resetForm() {
    setInputs({ initial }, handleSubmit);
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
    proteinState,
    toppingState,
    cheeseState,
    condimentState,
    resetForm,
    handleToppingChange,
    handleProteinChange,
    // clearForm,
  };
}

// this 'handleChange' only occur
