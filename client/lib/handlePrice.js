function handlePrice(operator, value) {
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
