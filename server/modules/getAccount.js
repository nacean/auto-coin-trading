const axios = require("axios").default;
const getToken = require("./getToken");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const uuid = require("uuid");

async function getAccount() {
  const token = getToken();

  const options = {
    method: "GET",
    url: "https://api.upbit.com/v1/accounts",
    headers: {
      Accept: "application/json",
      Authorization: token,
    },
  };

  const account = await axios.request(options);
  return account;
}

module.exports = getAccount;
