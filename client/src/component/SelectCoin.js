import React, { useEffect, useState } from "react";
import analyzeCandle from "../modules/analyzeCandle";
import marketCode from "../modules/marketCode";
import CoinOption from "./CoinOption";

function SelectCoin() {
  const [working, setworking] = useState(null);
  const [coinList, setcoinList] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState({});

  useEffect(() => {
    //마켓코드, 첫 코인 초기화
    marketCode().then((response) => {
      let refineCoinList = response.marketCode.filter(({ market }) => {
        return market.indexOf("KRW") !== -1;
      });
      refineCoinList = refineCoinList.sort((a, b) => {
        if (a.korean_name > b.korean_name) return 1;
        else if (a.korean_name < b.korean_name) return -1;
        else return 0;
      });
      setcoinList(refineCoinList);
      const firstCoin = {
        market: refineCoinList[0].market,
        korean_name: refineCoinList[0].korean_name,
      };
      setSelectedCoin(firstCoin);
      return refineCoinList[0];
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
      {working === null ? (
        <button
          onClick={() => {
            const timer = analyzeCandle(selectedCoin);
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

export default SelectCoin;
