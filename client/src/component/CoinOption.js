import React from "react";
import "../css/CoinOption.css";

function CoinOption({ coin, selected }) {
  const coinId = coin.market.split("-")[1];
  const iconUrl = `./assets/crypto-icons/color/${coinId}.png`;
  return (
    <li
      className={selected ? "coinList selectedCoin" : "coinList"}
      id={coin.market}
    >
      <img className="coinImage" src={iconUrl} alt="img" />
      {coin.korean_name}
    </li>
  );
}

export default CoinOption;
