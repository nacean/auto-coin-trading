require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const uuid = require("uuid");

const payload = {
  access_key: "" + process.env.ACCESS_KEY,
  nonce: uuid.v4,
};

router.get("/token", (req, res) => {
  const jwtToken = jwt.sign(payload, "" + process.env.SECRET_KEY);
  const authorizationToken = `Bearer ${jwtToken}`;
  res.send({ token: authorizationToken });
});

module.exports = router;
