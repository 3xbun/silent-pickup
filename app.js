const express = require("express");
const bodyParser = require("body-parser");
const localtunnel = require("localtunnel");

const PORT = 5500;

const app = express();
const db = require("./database/db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

const index = require("./routes/Index");
const queues = require("./routes/Queues");

app.use("/api", queues);
app.use("/", index);

app.listen(PORT, async () => {
  const tunnel = await localtunnel({ port: PORT, subdomain: "md-queue" });

  console.log(`App running on http://localhost:${PORT}`);
  console.log(`App running on ${tunnel.url}`);

  tunnel.on("close", () => {
    console.log("App closed");
  });
});
