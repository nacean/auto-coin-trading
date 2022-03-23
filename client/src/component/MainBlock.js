import React, { useEffect, useState } from "react";
import marketCode from "../modules/marketCode";
import MarketShow from "./MarketShow";
import TradingButton from "./TradingButton";
import "../css/MainBlock.css";
import CoinExplain from "./CoinExplain";

function MainBlock() {
  const [working, setworking] = useState(null);
  const [coinList, setcoinList] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState({});
  const [iconUrl, seticonUrl] = useState("");
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
      const coinId = firstCoin.market.split("-")[1];
      seticonUrl(`./assets/crypto-icons/color/${coinId}.png`);

      return refineCoinList[0];
    });
  }, []);

  return (
    <div className="MainBlock">
      <div className="showBlocks boxShadow">
        <CoinExplain iconUrl={iconUrl} selectedCoin={selectedCoin} />
        <TradingButton
          selectedCoin={selectedCoin}
          working={working}
          setworking={setworking}
        />
      </div>
      <MarketShow
        selectedCoin={selectedCoin}
        setSelectedCoin={setSelectedCoin}
        coinList={coinList}
        seticonUrl={seticonUrl}
      />
    </div>
  );
}

export default MainBlock;
