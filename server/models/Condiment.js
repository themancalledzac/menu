const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CondimentSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
  },
  stock: {
    type: Number,
  },
});

const Condiment = mongoose.model("Condiment", CondimentSchema);

module.exports = Condiment;
