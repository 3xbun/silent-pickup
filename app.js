const express = require("express");
const bodyParser = require("body-parser");
const localtunnel = require("localtunnel");

const PORT = process.env.PORT || 5500;

const app = express();
const { jsonServer } = require("./database/db");

const server = jsonServer.create();
const router = jsonServer.router("./database/Students.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

const index = require("./routes/Index");
const queues = require("./routes/Queues");

app.use("/api", queues);
app.use("/db", server);
app.use("/", index);

app.listen(PORT, async () => {
  console.log(`App running on http://localhost:${PORT}`);

  const tunnel = await localtunnel({ port: PORT, subdomain: "md-queue" });

  console.log(`App running on ${tunnel.url}`);

  tunnel.on("close", () => {
    console.log("App closed");
  });
});
