const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ToppingSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  price: {
    type: Number,
  },
});

const Topping = mongoose.model("Topping", ToppingSchema);

module.exports = Topping;
