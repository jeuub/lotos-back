const { Router } = require("express");
const router = Router();
const {
  getCheckout,
  createCheckout,
  createHouse,
  getHouses,
  getAvailableAll,
  getAvailableDate,
} = require("./handlers");

router.route("/rent").get(getCheckout).post(createCheckout);
router.route("/house").get(getHouses).post(createHouse);
router.route("/house/available/date").get(getAvailableDate);

module.exports = router;
