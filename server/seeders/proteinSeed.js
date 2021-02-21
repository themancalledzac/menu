let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/menu", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let proteinSeed = [
  {
    name: "beef",
    price: 2.5,
    stock: 60,
    vegitarian: false,
  },
  {
    name: "chicken",
    price: 3.0,
    stock: 40,
    vegitarian: false,
  },
  {
    name: "pork katsu",
    price: 5.0,
    stock: 30,
    vegitarian: false,
  },
  {
    name: "beef katsu",
    price: 5.0,
    stock: 30,
    vegitarian: false,
  },
  {
    name: "Impossible",
    price: 5.0,
    stock: 30,
    vegitarian: true,
  },
  {
    name: "Impossible katsu",
    price: 5.0,
    stock: 30,
    vegitarian: true,
  },
];

db.Protein.deleteMany({})
  .then(() => db.Protein.collection.insertMany(proteinSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
