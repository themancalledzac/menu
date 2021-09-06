const { Text, Integer, Relationship } = require("@keystonejs/fields");

module.exports = {
  fields: {
    name: { type: Text },
    price: { type: Integer },
    // https://v5.keystonejs.com/api/create-list#plugins
    // Looking at creating a plugin for calculating price of burger by the price of each of it's associated toppings
    // description: Text({
    //   ui: {
    //     displayMode: "textarea",
    //   },
    // }),
    protein: {
      type: Relationship,
      ref: "Protein",
      many: false,
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
