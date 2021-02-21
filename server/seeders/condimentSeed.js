let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/menu", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let condimentSeed = [
  {
    name: "Ketchup",
    price: 0.1,
    stock: 1000,
  },
  {
    name: "Mayo",
    price: 0.1,
    stock: 1000,
  },
  {
    name: "Dijon Mustard",
    price: 0.1,
    stock: 1000,
  },
  {
    name: "Soy Sauce",
    price: 0.1,
    stock: 1000,
  },
  {
    name: "Harissa",
    price: 0.1,
    stock: 1000,
  },
  {
    name: "Garlic Aioli",
    price: 0.1,
    stock: 1000,
  },
  {
    name: "Barbecue Sauce",
    price: 0.1,
    stock: 1000,
  },
];

db.Condiment.deleteMany({})
  .then(() => db.Condiment.collection.insertMany(condimentSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
