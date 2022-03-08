import axios from "axios";

async function getToken() {
  const token = await axios.get("api/token");
  return token.data.token;
}

export default getToken;
