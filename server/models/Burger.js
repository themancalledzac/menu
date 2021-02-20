const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BurgerSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter name of Burgerl",
  },
  toppings: {
    type: Schema.Types.ObjectId,
    ref: "Topping",
  },
  proteins: {
    type: Schema.Types.ObjectId,
    ref: "Protein",
  },
  condiments: {
    type: Schema.Types.ObjectId,
    ref: "Condiment",
  },
  price: {
    type: Number,
  },
});

const Burger = mongoose.model("Burger", BurgerSchema);

module.exports = Burger;
