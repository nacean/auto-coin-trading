import React from "react";
import minuteCandle from "../modules/minuteCandle";

function AnalyzeCandle({ market }) {
  minuteCandle(market).then((response) => {
    console.log(response.minuteCandle);
  });

  return <div>AnalyzeCandle test</div>;
}

export default AnalyzeCandle;
