const express = require("express");

const BurgerController = require("../controllers/burger-control");
const ToppingController = require("../controllers/topping-control");

const router = express.Router();

router.post("/burger", BurgerController.createBurger);
router.put("/burger/:id", BurgerController.updateBurger);
router.delete("/burger/:id", BurgerController.deleteBurger);
router.get("/burger/:id", BurgerController.getBurgerById);
router.get("/burgers", BurgerController.getBurgers);

router.get("/toppings", ToppingController.getToppings);

module.exports = router;
