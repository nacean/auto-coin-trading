import axios from "axios";

async function purchaseInfo(uuid) {
  const newInfo = await axios.get(`/api/purchaseInfo?uuid=${uuid}`);
  return newInfo.data;
}

export default purchaseInfo;
