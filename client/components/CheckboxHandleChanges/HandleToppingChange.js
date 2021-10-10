// future me will figure out how to export this and import it properly!

import createForm from "../../lib/createForm";

const { inputs } = createForm();

export default async function handleToppingChange(id, price, type) {
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
