const { Topping } = require("../models");

getToppings = async (req, res) => {
  await Topping.find({}, (err, toppings) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!toppings.length) {
      return res
        .status(404)
        .json({ success: false, error: "Toppings not found " });
    }
    return res.status(200).json({ success: true, data: toppings });
  }).catch((err) => console.log(err));
};

module.exports = {
  getToppings,
};
