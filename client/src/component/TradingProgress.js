import React from "react";
import "../css/TradingProgress.css";
function TradingProgress({ candleDisplayInfo, purchaseDisplayInfo }) {
  const { comparePrice, tradePrice, downCandleLength } = candleDisplayInfo;
  const { price, trade_price } = purchaseDisplayInfo;
  return (
    <div className="infoDisplay">
      <div className="candleInfoDisplay displayText">
        캔들정보
        <div className="downCandleCnt">{`음봉 틱 개수 : ${downCandleLength}`}</div>
        <div className="compare">{`기준 종가 : ${comparePrice} 현재 가격 : ${tradePrice}`}</div>
        <div className="startPurchase">
          {downCandleLength === 3 ? "매수를 시작하였습니다" : ""}
        </div>
      </div>
      <div className="purchaseInfoDisplay displayText">
        매수/매도 정보
        <div className="purchaseCompare">{`매수 금액 : ${price} | 현재 가격 : ${trade_price}`}</div>
      </div>
    </div>
  );
}

export default TradingProgress;
