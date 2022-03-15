const express = require("express");
const getTicker = require("../modules/getTicker");
const router = express.Router();

router.get("/ticker", (req, res) => {
  const { market } = req.query;
  getTicker(market).then((response) => {
    res.send({ ticker: response.data });
  });
});

module.exports = router;
