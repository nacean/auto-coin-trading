import React from "react";
import "../css/CoinOption.css";

function CoinOption({ coin, selected }) {
  return (
    <li
      className={selected ? "coinList selectedCoin" : "coinList"}
      id={coin.market}
    >
      {coin.korean_name}
    </li>
  );
}

export default CoinOption;
