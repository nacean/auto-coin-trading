const express = require("express");
const getTicker = require("../modules/getTicker");
const router = express.Router();

router.get("/ticker", (req, res) => {
  getTicker().then((response) => {
    res.send({ ticker: response.data });
  });
});

module.exports = router;
