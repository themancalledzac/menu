const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProteinSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  price: {
    type: Number,
  },
});

const Protein = mongoose.model("Protein", ProteinSchema);

module.exports = Protein;
