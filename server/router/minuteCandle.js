const express = require("express");
const getMinuteCandle = require("../modules/getMinuteCandle");
const router = express.Router();

router.get("/minuteCandle", (req, res) => {
  const { market } = req.query;
  getMinuteCandle(market).then((response) => {
    res.send({ minuteCandle: response.data });
  });
});

module.exports = router;
