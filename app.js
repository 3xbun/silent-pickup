const express = require("express");
const bodyParser = require("body-parser");

const PORT = 5000;
const queues = require("./routes/Queues");

const app = express();
const db = require("./database/db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/api", queues);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/pick-up", (req, res) => {
  res.render("pickUp");
});

app.get("/queues", (req, res) => {
  res.render("queues");
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
