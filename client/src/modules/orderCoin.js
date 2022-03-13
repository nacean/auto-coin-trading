import axios from "axios";

async function orderCoin(market, side) {
  const order = await axios.get(`api/order?market=${market}&side=${side}`);

  return order.data;
}

export default orderCoin;
