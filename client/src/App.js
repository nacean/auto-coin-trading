import React, { useEffect, useState } from "react";
import SelectCoin from "./component/SelectCoin";
function App() {
  return (
    <div className="App">
      <h1>비트코인 자동 매매 프로그램</h1>
      <SelectCoin />
    </div>
  );
}

export default App;
