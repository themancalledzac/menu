export default function handleToppingChange(position, id) {
  const updatedCheckedToppingState = toppingChecked.map(
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
    // (index === position ? !item : item)
    // index === position ? id : null
  );

  setToppingChecked(updatedCheckedToppingState);
  console.log(toppingChecked);

  const totalPrice = updatedCheckedToppingState.reduce(
    (sum, currentState, index) => {
      if (currentState === true) {
        return sum + data.allToppings[index].price;
      }
      return sum;
    },
    0
  );

  //   setTotal(totalPrice);
}
