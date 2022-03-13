import axios from "axios";

async function orderCoin(market, side) {
  const order = await axios
    .get(`api/order?market=${market}&side=${side}`)
    .then((response) => {
      console.log(response);
    });

  return order;
}

export default orderCoin;
