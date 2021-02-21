let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/menu", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let toppingSeed = [
  {
    name: "bun",
    price: 0.5,
    stock: 100,
  },
  {
    name: "onion",
    price: 0.2,
    stock: 100,
  },
  {
    name: "pickle",
    price: 0.1,
    stock: 100,
  },
  {
    name: "pickle",
    price: 0.1,
    stock: 100,
  },
  {
    name: "lettuce",
    price: 0.2,
    stock: 100,
  },
  {
    name: "coleslaw",
    price: 0.2,
    stock: 100,
  },
  {
    name: "kimchi",
    price: 0.2,
    stock: 100,
  },
  {
    name: "arugula",
    price: 0.2,
    stock: 100,
  },
  {
    name: "tomato",
    price: 0.3,
    stock: 100,
  },
  {
    name: "avocado",
    price: 1.0,
    stock: 100,
  },
  {
    name: "bacon",
    price: 1.2,
    stock: 100,
  },
  {
    name: "mushrooms",
    price: 0.3,
    stock: 100,
  },
  {
    name: "egg",
    price: 0.8,
    stock: 100,
  },
];

db.Topping.deleteMany({})
  .then(() => db.Topping.collection.insertMany(toppingSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
