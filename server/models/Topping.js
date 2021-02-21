const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ToppingSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

const Topping = mongoose.model("Topping", ToppingSchema);

module.exports = Topping;
