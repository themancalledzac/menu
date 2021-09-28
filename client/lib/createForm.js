import { useEffect, useState } from "react";

export default function createForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join("");

  useEffect(() => {
    // function that runs when we change our inputs
  }, [initialValues]);

  function handleChange(e) {
    let { id, name, price } = e.target;

    setInputs({
      //copy the existing state
      ...inputs,
      // using a variable for what we are targeting
      [name]: value,
      [price]: (price += price),
    });
  }

  return {
    inputs,
    handleChange,
  };
}
