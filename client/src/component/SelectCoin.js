import React, { useEffect, useState } from "react";
import marketCode from "../modules/marketCode";
import AnalyzeCandle from "./AnalyzeCandle";
import CoinOption from "./CoinOption";
import OrderPage from "./OrderPage";

function SelectCoin() {
  const [coinList, setcoinList] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState({
    market: "KRW-BTC",
    korean_name: "비트코인",
  });

  useEffect(() => {
    marketCode().then((response) => {
      const refineCoinList = response.marketCode.filter(({ market }) => {
        return market.indexOf("KRW") !== -1;
      });
      setcoinList(refineCoinList);
    });
  }, []);

  return (
    <div>
      <div>Select Coin!</div>
      <select
        name="coinScroll"
        id="coinScroll"
        onChange={(e) => {
          const coinInfo = {
            market: e.target.value,
            korean_name: e.target.selectedOptions[0].innerText,
          };
          setSelectedCoin(coinInfo);
        }}
      >
        {coinList.map((coin) => {
          return <CoinOption coin={coin} />;
        })}
      </select>
      <div>현재 선택하신 코인은 [{selectedCoin.korean_name}] 입니다</div>
    </div>
  );
}

export default SelectCoin;
