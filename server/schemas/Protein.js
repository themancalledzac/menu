const { Text, Checkbox } = require("@keystonejs/fields");

module.exports = {
  fields: {
    name: { type: Text },
    price: { type: Decimal },
    stock: { type: Decimal },
  },
};
