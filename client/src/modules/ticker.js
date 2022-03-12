import axios from "axios";

async function ticker() {
  const newTicker = await axios.get("/api/ticker");
  return newTicker.data;
}

export default ticker;
