import React, { useEffect, useState } from "react";
import marketCode from "../modules/marketCode";
import AnalyzeCandle from "./AnalyzeCandle";
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
          setSelectedCoin({
            market: e.target.value,
            korean_name: e.target.selectedOptions[0].innerText,
          });
        }}
      >
        {coinList.map((coin) => {
          return (
            <option
              key={coin.korean_name}
              value={coin.market}
              defaultValue="KRW-BTC"
            >
              {coin.korean_name}
            </option>
          );
        })}
      </select>
      <div>현재 선택하신 코인은 [{selectedCoin.korean_name}] 입니다</div>
      <AnalyzeCandle market={selectedCoin.market} />
      <OrderPage market={selectedCoin.market} side="bid" />
    </div>
  );
}

export default SelectCoin;
