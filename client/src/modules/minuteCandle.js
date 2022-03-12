import axios from "axios";

async function minuteCandle(market) {
  const newMinuteCandle = await axios.get(`/api/minuteCandle?market=${market}`);
  return newMinuteCandle.data;
}

export default minuteCandle;
