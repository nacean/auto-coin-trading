const getPostToken = require("./getPostToken");
const queryEncode = require("querystring").encode;
const axios = require("axios").default;

async function getPurchaseInfo(uuid) {
  const body = {
    uuid: uuid,
  };

  const token = getPostToken(body);
  const query = queryEncode(body);
  const options = {
    method: "GET",
    url: `https://api.upbit.com/v1/order?${query}`,
    headers: { Accept: "application/json", Authorization: token },
    josn: body,
  };

  const info = axios.request(options);

  return info;
}

module.exports = getPurchaseInfo;
