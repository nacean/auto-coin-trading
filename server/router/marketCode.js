const express = require("express");
const getMarketCode = require("../modules/getMarketCode");
const router = express.Router();

router.get("/marketCode", (req, res) => {
  getMarketCode().then((response) => {
    res.send({ marketCode: response.data });
  });
});

module.exports = router;
