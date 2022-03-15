import minuteCandle from "./minuteCandle";
import candleStore from "../utils/candles";
import analyzeSellingPoint from "./analyzeSellingPoint";

function analyzeCandle({ Coin }) {
  const { market } = Coin;
  const { downCandles, insertCandle, topCandle, initTopCandle, resetCandle } =
    candleStore();

  minuteCandle(market).then((response) => {
    const newCandleInfo = response.minuteCandle;
    const { opening_price, trade_price } = newCandleInfo;
    const candleDegree = trade_price - opening_price;

    if (topCandle === null) {
      //첫 양봉 갱신
      if (candleDegree > opening_price * 0.005) {
        initTopCandle(newCandleInfo);
      }
    } else {
      //topCandle보다 큼 or 빅 양봉임
      if (
        trade_price > topCandle.trade_price ||
        candleDegree > trade_price * 0.004
      ) {
        initTopCandle(newCandleInfo);
        resetCandle();
      } else {
        const comparePrice =
          downCandles.length === 0
            ? topCandle.trade_price
            : downCandles[downCandles.length - 1].trade_price;

        if (comparePrice - comparePrice * 0.009 > trade_price) {
          insertCandle(newCandleInfo);
        }

        if (downCandles.length === 3) {
          analyzeSellingPoint(market);
          resetCandle();
          initTopCandle(null);
        }
      }
    }
  });
}

export default analyzeCandle;
