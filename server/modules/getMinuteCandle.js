const axios = require("axios").default;

async function getMinuteCandle(market) {
  const options = {
    method: "GET",
    url: `https://api.upbit.com/v1/candles/minutes/5?market=${market}&count=2`,
    headers: { Accept: "application/json" },
  };

  const candle = axios.request(options);

  return candle;
}

module.exports = getMinuteCandle;
