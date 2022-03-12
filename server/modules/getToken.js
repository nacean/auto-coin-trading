//require("dotenv").config();
const jwt = require("jsonwebtoken");
const keys = require("../constants/keys");
const payload = require("../constants/payload");
const SECRET_KEY = keys.SECRET_KEY;

function getToken() {
  //const jwtToken = jwt.sign(payload, process.env.SECRET_KEY);
  const jwtToken = jwt.sign(payload, SECRET_KEY);

  const authorization = `Bearer ${jwtToken}`;

  return authorization;
}

module.exports = getToken;
