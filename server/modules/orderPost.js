const getPostToken = require("./getPostToken");

const axios = require("axios").default;

let identifyNumber = 0;

async function orderPost(market, side, volume) {
  const order_type = side === "bid" ? "price" : "market";
  const price = side === "bid" ? "20000" : null;
  const vol = volume === "0" ? null : volume;
  const body = {
    market: market,
    side: side,
    price: price,
    volume: vol,
    ord_type: order_type,
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
