const { Burger, Condiment, Protein, Topping } = require("../models");

createBurger = ({ body }, res) => {
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must name your burger",
    });
  }

  const burger = new Burger(body);

  if (!burger) {
    return res.status(400).json({ success: false, error: err });
  }
  burger.name = body.name;
  // TODO need this topping to link to it's _ID
  burger.toppings = body.toppings;
  // TODO need this protein to link to it's _ID
  burger.proteins = body.proteins;
  // TODO need this comdiment` to link to it's _ID
  burger.condiments = body.condiments;

  burger
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: burger._id,
        message: "Burger Created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Burger not created.",
      });
    });
};

updateBurger = async ({ body }, rest) => {
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "you must provide a burger to update",
    });
  }

  await Burger.findOne(
    { _id: requestAnimationFrame.params.id },
    (err, burger) => {
      if (err) {
        return res.status(404).json({
          err,
          message: "Burger not found.",
        });
      }
      burger.name = body.name;
      burger.toppings = body.toppings;
      burger.proteins = body.proteins;
      burger.condiments = body.condiments;

      burger
        .save()
        .then(() => {
          return res.status(200).json({
            success: true,
            id: burger._id,
            message: "Burger Update!",
          });
        })
        .catch((error) => {
          return res.status(404).json({
            error,
            message: "Burger not updated",
          });
        });
    }
  );
};

deleteBurger = async (req, res) => {
  await Burger.findOneAndDelete({ _id: req.params.id }, (err, burger) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!burger) {
      return res
        .status(404)
        .json({ success: false, error: "Burger not found" });
    }

    return res.status(200).json({ success: true, data: burger });
  }).catch((err) => console.log(err));
};

getBurgerById = async (req, res) => {
  await Burger.findOne({ _id: req.params.id }, (err, burger) => {
    if (err) {
      return res.status(400).json({ ssuccess: false, error: err });
    }
    if (!burger) {
      return res
        .status(404)
        .json({ success: false, error: "Burger not found" });
    }
    return res.status(200).json({ success: true, data: burger });
  }).catch((err) => console.log(err));
};

getBurgers = async (req, res) => {
  await Burger.find({}, (err, burgers) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!burgers.length) {
      return res
        .status(404)
        .json({ success: false, error: "Burgers not found " });
    }
    return res.status(200).json({ success: true, data: burgers });
  }).catch((err) => console.log(err));
};

module.exports = {
  createBurger,
  updateBurger,
  deleteBurger,
  getBurgerById,
  getBurgers,
};
