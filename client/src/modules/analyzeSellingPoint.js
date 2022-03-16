import purchaseStore from "../utils/purchaseStore";
import orderCoin from "./orderCoin";
import ticker from "./ticker";

function analyzeSellingPoint(market) {
  const { getPurchasedCoin, setpurchasedCoin, resetCoin } = purchaseStore;
  const timer = setInterval(() => {
    orderCoin(market, "bid", "0").then((response) => {
      const newPurchasedCoin = response.order;
      setpurchasedCoin(newPurchasedCoin);
    });

    const purchasedCoin = getPurchasedCoin();
    const { price } = purchasedCoin;

    ticker(market).then((response) => {
      const { opening_price, executed_volume } = response.ticker;
      if (price * 1.01 <= opening_price) {
        //수익이 나는 경우
        orderCoin(market, "ask", executed_volume);
        console.log("수익이 발생했습니다");
        clearInterval(timer);
      } else if (opening_price * 1.015 <= price) {
        //수익이 안나는 경우
        orderCoin(market, "ask", executed_volume);
        console.log("손실이 발생했습니다.");
        clearInterval(timer);
      }
    });
  }, 1000);

  resetCoin();
}

export default analyzeSellingPoint;
