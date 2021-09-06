const { Text, Integer } = require("@keystonejs/fields");

module.exports = {
  fields: {
    name: { type: Text },
    price: { type: Integer },
    stock: { type: Integer },
  },
};
