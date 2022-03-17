const express = require("express");
const app = express();
const port = 5000;

//const cors = require("cors");
//app.use(cors());

const account = require("./router/account");
app.use("/api", account);

const marketCode = require("./router/marketCode");
app.use("/api", marketCode);

const ticker = require("./router/ticker");
app.use("/api", ticker);

const minuteCandle = require("./router/minuteCandle");
app.use("/api", minuteCandle);

const order = require("./router/order");
app.use("/api", order);

const purchaseInfo = require("./router/purchaseInfo");
app.use("/api", purchaseInfo);

app.listen(port, () => console.log(`Server on. Port Number : ${port}`));
