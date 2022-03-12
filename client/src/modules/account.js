import axios from "axios";

async function account() {
  const newAccount = await axios.get("/api/account");
  return newAccount.data;
}

export default account;
