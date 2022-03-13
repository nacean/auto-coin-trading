const getPostToken = require("./getPostToken");

const axios = require("axios").default;

let identifyNumber = 0;

async function orderPost(market, side) {
  const order_type = side === "bid" ? "price" : "market";

  const body = {
    market: market,
    side: side,
    price: "7000",
    ord_type: order_type,
    identifier: identifyNumber,
  };

  const token = getPostToken(body);

  const options = {
    method: "POST",
    url: "https://api.upbit.com/v1/orders",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    data: body,
  };

  const order = await axios.request(options);

  identifyNumber++;

  return order;
}

module.exports = orderPost;
