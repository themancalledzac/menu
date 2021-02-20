const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProteinSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Protein = mongoose.model("Protein", ProteinSchema);

module.exports = Protein;
