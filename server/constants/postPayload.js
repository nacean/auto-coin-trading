const uuid = require("uuid");
const keys = require("./keys");
const ACCESS_KEY = keys.ACCESS_KEY;

function postPayload(queryHash) {
  const payload = {
    access_key: ACCESS_KEY,
    nonce: uuid.v4(),
    query_hash: queryHash,
    query_hash_alg: "SHA512",
  };

  return payload;
}
module.exports = postPayload;
