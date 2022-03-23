import React from "react";
import "../css/CoinExplain.css";

function CoinExplain({ iconUrl, selectedCoin }) {
  return (
    <div className="coinExplain">
      현재 선택하신 코인은
      <img className="coinBigImage" src={iconUrl} alt="img" />
      <div className="coinName">[{selectedCoin.korean_name}]</div>
      입니다
    </div>
  );
}

export default CoinExplain;
