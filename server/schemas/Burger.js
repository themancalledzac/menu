const { Text, Checkbox, Relationship } = require("@keystonejs/fields");
import { Protein } from "./Protein";
import { Topping } from "./Topping";

module.exports = {
  fields: {
    name: { type: Text },
    price: { type: Decimal },
    // https://v5.keystonejs.com/api/create-list#plugins
    // Looking at creating a plugin for calculating price of burger by the price of each of it's associated toppings
    protein: {
      type: Relationship,
      ref: "Protein",
      many: true,
    },
    topping: {
      type: Relationship,
      ref: "Topping",
      many: true,
    },
    cheese: {
      type: Relationship,
      ref: "Cheese",
      many: true,
    },
    condiment: {
      type: Relationship,
      ref: "Condiment",
      many: true,
    },
  },
};
