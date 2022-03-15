import purchaseStore from "../utils/purchasedCoin";
import orderCoin from "./orderCoin";
import ticker from "./ticker";

function analyzeSellingPoint(market) {
  const { setpurchasedCoin, resetCoin } = purchaseStore();

  orderCoin(market, "bid", "0").then((response) => {
    const newPurchasedCoin = response.order;
    setpurchasedCoin(newPurchasedCoin);
  });

  const { purchasedCoin } = purchaseStore();
  const { price } = purchasedCoin;

  ticker(market).then((response) => {
    const { opening_price, executed_volume } = response.ticker;
    if (price * 1.01 <= opening_price) {
      orderCoin(market, "ask", executed_volume);
    }
  });

  resetCoin();
}

export default analyzeSellingPoint;
