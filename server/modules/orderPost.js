const getPostToken = require("./getPostToken");

const axios = require("axios").default;

let identifyNumber = 0;

async function orderPost(market, side, volume) {
  const order_type = side === "bid" ? "price" : "market";
  const price = side === "bid" ? "7000" : null;
  volume = volume === "0" ? null : volume;
  const body = {
    market: market,
    side: side,
    price: price,
    ord_type: order_type,
    identifier: identifyNumber,
    volume: volume,
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
