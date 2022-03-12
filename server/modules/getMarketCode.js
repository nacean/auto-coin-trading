const axios = require("axios").default;

async function getMarketCode() {
  const options = {
    method: "GET",
    url: "https://api.upbit.com/v1/market/all?isDetails=false",
    headers: { Accept: "application/json" },
  };

  const marketCode = await axios.request(options);

  return marketCode;
}

module.exports = getMarketCode;
