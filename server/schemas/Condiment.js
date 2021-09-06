const { Text, Float } = require("@keystonejs/fields");

module.exports = {
  fields: {
    name: { type: Text },
    price: { type: Float },
    stock: { type: Float },
  },
};
