import React from "react";
import analyzeCandle from "../modules/analyzeCandle";
import "../css/TradingButton.css";
function TradingButton({ selectedCoin, working, setworking }) {
  return (
    <div className="tradingBtn">
      {working === null ? (
        <button
          onClick={() => {
            const timer = analyzeCandle(selectedCoin);
            //testOrder(selectedCoin);
            setworking(timer);
          }}
        >
          시작하기
        </button>
      ) : (
        <button
          onClick={() => {
            clearInterval(working);
            setworking(null);
          }}
        >
          그만하기
        </button>
      )}
    </div>
  );
}

export default TradingButton;
