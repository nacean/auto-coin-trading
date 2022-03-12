import axios from "axios";

async function marketCode() {
  const newMarketCode = await axios.get("/api/marketCode");
  return newMarketCode.data;
}

export default marketCode;
