const express = require("express");

const BurgerController = require("../controllers/burger-control");

const router = express.Router();

router.post("/burger", BurgerController.createBurger);
router.put("/burger/:id", BurgerController.updateBurger);
router.delete("/burger/:id", BurgerController.deleteBurger);
router.get("/burger/:id", BurgerController.getBurgerById);
router.get("/burgers", BurgerController.getBurgers);

module.exports = router;
