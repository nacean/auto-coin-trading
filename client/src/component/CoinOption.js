import React from "react";

function CoinOption({ coin }) {
  return (
    <option key={coin.korean_name} value={coin.market} defaultValue="KRW-BTC">
      {coin.korean_name}
    </option>
  );
}

export default CoinOption;
