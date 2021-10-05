// future me will figure out how to export this and import it properly!

import createForm from "../../lib/createForm";

const { inputs } = createForm();

export default function handleToppingChange(id) {
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
  return {
    handleToppingChange,
  };
}
