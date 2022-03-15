const express = require("express");
const orderPost = require("../modules/orderPost");
const router = express.Router();

router.get("/order", (req, res) => {
  const { market, side, volume } = req.query;
  orderPost(market, side, Number(volume)).then((response) => {
    res.send({ order: response.data });
  });
});

module.exports = router;
