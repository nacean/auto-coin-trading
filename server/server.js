const express = require("express");
const app = express();
const token = require("./router/token");
const port = 5000;

//const cors = require("cors");
//app.use(cors());

app.use("/api", token);

app.listen(port, () => console.log(`Server on. Port Number : ${port}`));
