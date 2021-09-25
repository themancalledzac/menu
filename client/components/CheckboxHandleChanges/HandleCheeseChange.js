export default function handleCheeseChange(position, id) {
  const updatedCheckedCheeseState = cheeseChecked.map(
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

  setCheeseChecked(updatedCheckedCheeseState);
  console.log(cheeseChecked);

  const totalPrice = updatedCheckedCheeseState.reduce(
    (sum, currentState, index) => {
      if (currentState === true) {
        return sum + data.allCheeses[index].price;
      }
      return sum;
    },
    0
  );

  //   setTotal(totalPrice);
}
