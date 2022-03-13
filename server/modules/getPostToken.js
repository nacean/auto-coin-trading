const crypto = require("crypto");
const postPayload = require("../constants/postPayload");
const sign = require("jsonwebtoken").sign;
const queryEncode = require("querystring").encode;
const keys = require("../constants/keys");
const SECRET_KEY = keys.SECRET_KEY;

function getPostToken(body) {
  const query = queryEncode(body);
  const hash = crypto.createHash("sha512");
  const queryHash = hash.update(query, "utf-8").digest("hex");

  const payload = postPayload(queryHash);

  const token = sign(payload, SECRET_KEY);

  const authorization = `Bearer ${token}`;

  return authorization;
}

module.exports = getPostToken;
