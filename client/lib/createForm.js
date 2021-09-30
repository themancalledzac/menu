import { useEffect, useState } from "react";

export default function createForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);
  const [proteinState, setProteinState] = useState(null);
  const handle
  const initialValues = Object.values(initial).join("");

  useEffect(() => {
    // function that runs when we change our inputs
  }, [initialValues]);

    function handleChange(e) {
      let { value, name, index, id, type } = e.target;

      // protein logic
      if (type === 'protein') {
        // if protein let's:
        // 1. Check proteinstate, if the same, do nothing.
        // 2. if different, setProteinState, and then setInputs state
        if (!id === proteinState) {
          setProteinState(id);
          setInputs({
            ...inputs,
            [name]: {id: proteinState},
          }),
          console.log(inputs)
        }
            // - setInputs(
            //      ...inputs,
            //      [name]: { id: proteinState },   
            //   ),
            //   console.log(currentValues)
      };

      // all other logic



      setInputs({
        ...inputs,
        [name]: value,
      });
    }

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






// this 'handleChange' only occur