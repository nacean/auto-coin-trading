import axios from "axios";

async function ticker(market) {
  const newTicker = await axios.get(`/api/ticker?market=${market}`);
  return newTicker.data;
}

export default ticker;
