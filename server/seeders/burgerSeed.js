let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/menu", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let burgerSeed = [
  {
    name: "Plain Jane",
    toppings: [
      {
        _id: ObjectID("6032c1c571839c62fc2c50b8"),
        $ref: "Topping",
      },
    ],
    proteins: {
      _id: ObjectID("6032c1689ed1df5314d42010"),
      $ref: "Protein",
    },
    condiments: {
      _id: ObjectID("6032c29f8f6d874908d9d2f6"),
      $ref: "Condiment",
    },
  },
];

db.Burger.deleteMany({})
  .then(() => db.Burger.collection.insertMany(burgerSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
