import React from "react";
import analyzeCandle from "../modules/analyzeCandle";
import "../css/TradingButton.css";
function TradingButton({ selectedCoin, working, setworking }) {
  return (
    <div className="tradingBtnBox">
      {working === null ? (
        <button
          className="tradingBtn"
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
          className="tradingBtn"
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
