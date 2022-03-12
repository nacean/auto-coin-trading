const uuid = require("uuid");
const keys = require("./keys");
const ACCESS_KEY = keys.ACCESS_KEY;

const payload = {
  //access_key: process.env.ACCESS_KEY,
  access_key: ACCESS_KEY,
  nonce: uuid.v4(),
};

module.exports = payload;
