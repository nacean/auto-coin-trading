import axios from "axios";

async function orderCoin(market, side, volume) {
  const order = await axios.get(
    `api/order?market=${market}&side=${side}&volume=${volume}`
  );

  return order.data;
}

export default orderCoin;
