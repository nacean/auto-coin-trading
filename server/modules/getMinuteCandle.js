const axios = require("axios").default;

async function getMinuteCandle(market) {
  const options = {
    method: "GET",
    url: `https://api.upbit.com/v1/candles/minutes/1?market=${market}&count=1`,
    headers: { Accept: "application/json" },
  };

  const candle = axios.request(options);

  return candle;
}

module.exports = getMinuteCandle;
