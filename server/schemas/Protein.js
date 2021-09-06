const { Text, Integer, Checkbox } = require("@keystonejs/fields");

module.exports = {
  fields: {
    name: { type: Text },
    price: { type: Integer },
    stock: { type: Integer },
    vegitarian: { type: Checkbox },
  },
};
