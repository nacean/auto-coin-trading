const express = require("express");
const getAccount = require("../modules/getAccount");
const router = express.Router();

router.get("/account", (req, res) => {
  getAccount().then((data) => {
    res.send({ account: data.data });
  });
});

module.exports = router;
