import minuteCandle from "./minuteCandle";
import candleStore from "../utils/candleStore";
import analyzeSellingPoint from "./analyzeSellingPoint";
import purchaseStore from "../utils/purchaseStore";

function analyzeCandle(Coin, setcandleDisplayInfo, setpurchaseDisplayInfo) {
  const { getdoingPurchase } = purchaseStore;
  const {
    getTopCandle,
    getDownCandles,
    insertCandle,
    initTopCandle,
    resetCandle,
  } = candleStore;
  const { market } = Coin;

  //candle 정보 초기화
  initTopCandle(null);
  resetCandle();

  const timer = setInterval(() => {
    const doingPurchase = getdoingPurchase();
    if (!doingPurchase) {
      minuteCandle(market)
        .then((response) => {
          const newCandleInfo = response.minuteCandle[0];
          console.log(newCandleInfo);
          const { opening_price, trade_price } = newCandleInfo;
          const candleDegree = trade_price - opening_price;

          if (getTopCandle() === null) {
            //첫 양봉 갱신
            if (candleDegree > 0) {
              initTopCandle(newCandleInfo);
              resetCandle();
              console.log("양봉 갱신");
              return {
                comparePrice: getTopCandle().trade_price,
                tradePrice: trade_price,
                downCandleLength: getDownCandles().length,
              };
            }
            return {
              comparePrice: "없음",
              tradePrice: trade_price,
              downCandleLength: getDownCandles().length,
            };
          } else {
            //topCandle보다 큼 or 빅 양봉임
            if (
              trade_price > getTopCandle().trade_price ||
              candleDegree >= trade_price * 0.005
            ) {
              console.log("더 큰 양봉 발견 or 빅 양봉");
              initTopCandle(newCandleInfo);
              resetCandle();
              return {
                comparePrice: getTopCandle().trade_price,
                tradePrice: trade_price,
                downCandleLength: getDownCandles().length,
              };
            } else {
              const comparePrice =
                getDownCandles().length === 0
                  ? getTopCandle().trade_price
                  : getDownCandles()[getDownCandles().length - 1].trade_price;
              console.log(
                `compare Price : ${
                  comparePrice - comparePrice * 0.009
                } , trade_price : ${trade_price}`
              );
              /*if (comparePrice - comparePrice * 0.009 > trade_price) {
            insertCandle(newCandleInfo);
            console.log("음봉 1틱 추가");
          }*/
              if (comparePrice - comparePrice * 0.001 > trade_price) {
                //테스트를 위해 조건 완화
                insertCandle(newCandleInfo);
                console.log("음봉 1틱 추가");
              }

              if (getDownCandles().length === 3) {
                console.log("매수가 시작되었습니다.");
                //3틱 매집, 매수 시작
                analyzeSellingPoint(market, setpurchaseDisplayInfo);
              }

              return {
                comparePrice: comparePrice,
                tradePrice: trade_price,
                downCandleLength: getDownCandles().length,
              };
            }
          }
        })
        .then((response) => {
          setcandleDisplayInfo(response);
        });
    }
  }, 3000);

  return timer;
}

export default analyzeCandle;
