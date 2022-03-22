import React, { useState } from "react";
import CoinOption from "./CoinOption";
import "../css/MarketShow.css";
import SearchCoin from "./SearchCoin";
function MarketShow({ selectedCoin, setSelectedCoin, coinList }) {
  const [coinInput, setcoinInput] = useState("");
  function selectMarket(target) {
    const nowCoin = {
      market: target.id,
      korean_name: target.innerText,
    };
    setSelectedCoin(nowCoin);
  }

  return (
    <section className="MarketShow boxShadow">
      <SearchCoin coinInput={coinInput} setcoinInput={setcoinInput} />
      <ul
        className="coinListContainer"
        onClick={(e) => {
          selectMarket(e.target);
        }}
      >
        {coinList
          .filter((e) => e.korean_name.indexOf(coinInput) !== -1)
          .map((coin) => {
            return (
              <CoinOption
                coin={coin}
                key={coin.market}
                selected={coin.market === selectedCoin.market ? true : false}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default MarketShow;

/*<select
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
    </select> */
