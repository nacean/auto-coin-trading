import React from "react";
import orderCoin from "../modules/orderCoin";

function OrderPage({ market, side }) {
  console.log(market, side);
  return (
    <div>
      <button
        onClick={() => {
          orderCoin(market, side);
        }}
      >
        Order
      </button>
    </div>
  );
}

export default OrderPage;
