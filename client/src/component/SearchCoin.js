import React from "react";
import "../css/SearchCoin.css";

function SearchCoin({ coinInput, setcoinInput}) {
  function resetSearch() {
    setcoinInput("");
  }
  return (
    <div className="searchCoinBox">
      <input
        type="text"
        name="searchCoin"
        id="searchCoin"
        placeholder="코인 검색"
        value={coinInput}
        onChange={(e) => {
          setcoinInput(e.target.value);
        }}
      ></input>
      <div className="btnBox">
        <button
          className={coinInput === "" ? "resetBtn noDisplay" : "resetBtn"}
          onClick={resetSearch}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default SearchCoin;
