import React, { useEffect, useState } from "react";
import minuteCandle from "../modules/minuteCandle";

function AnalyzeCandle({ market }) {
  const [candles, setcandles] = useState([]);

  useEffect(() => {
    minuteCandle(market).then((response) => {
      const newCandles = response.minuteCandle;
      setcandles([...candles, newCandles]);
    });
  }, []);

  return <div>AnalyzeCandle test</div>;
}

export default AnalyzeCandle;
