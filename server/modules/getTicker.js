const axios = require("axios").default;

async function getTicker(market) {
  const options = {
    method: "GET",
    url: `https://api.upbit.com/v1/ticker?markets=${market}`,
    headers: { Accept: "application/json" },
  };

  const ticker = await axios.request(options);

  return ticker;
}

module.exports = getTicker;
