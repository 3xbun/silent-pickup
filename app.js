const express = require("express");
const bodyParser = require("body-parser");

const PORT = 5000;
const queues = require("./routes/Queues");

const app = express();
const db = require("./database/db");

app.use(bodyParser.json());

app.use("/api", queues);

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
