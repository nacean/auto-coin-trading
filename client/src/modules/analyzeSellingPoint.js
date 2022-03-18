import purchaseStore from "../utils/purchaseStore";
import orderCoin from "./orderCoin";
import purchaseInfo from "./purchaseInfo";
import ticker from "./ticker";
let cnt = 0;
function analyzeSellingPoint(market) {
  const { getPurchasedCoin, setpurchasedCoin, resetCoin } = purchaseStore;

  orderCoin(market, "bid", "0").then((response) => {
    const newPurchasedCoin = response.order;
    console.log("구매하였습니다", response.order);
    const { uuid } = newPurchasedCoin;

    purchaseInfo(uuid).then((response) => {
      // trades에 필요한거 다 있음
      //info.trades[0].price : 평매수가
      //info.trades[0].volume : 매수량
      const info = response.info;
      setpurchasedCoin(info);
      const trades = getPurchasedCoin().trades[0];
      const { price, volume } = trades;

      const timer = setInterval(() => {
        ticker(market).then((response) => {
          const { trade_price } = response.ticker[0];
          console.log(
            `${cnt} : price is ${price}, trade price is ${trade_price}`
          );
          //if (price * 1.01 <= trade_price) {
          if (price * 1.005 <= trade_price) {
            //조건완화
            //수익이 나는 경우
            orderCoin(market, "ask", volume).then((response) => {
              console.log("수익이 발생했습니다", response.order);
              clearInterval(timer);
            });
          } //else if (trade_price * 1.01 <= price) {
          else if (trade_price * 1.005 <= price) {
            //조건완화
            //수익이 안나는 경우
            orderCoin(market, "ask", volume).then((response) => {
              console.log("손실이 발생했습니다.", response.order);
              clearInterval(timer);
            });
          }
        });
        cnt++;
      }, 1000);

      //코인 초기화
      resetCoin();
    });
  });
}

export default analyzeSellingPoint;
