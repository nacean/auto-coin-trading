const express = require("express");
const getPurchaseInfo = require("../modules/getPurchaseInfo");
const router = express.Router();

router.get("/purchaseInfo", (req, res) => {
  const { uuid } = req.query;
  getPurchaseInfo(uuid).then((response) => {
    res.send({ info: response.data });
  });
});

module.exports = router;
