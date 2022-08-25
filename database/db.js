const mongoose = require("mongoose");
const jsonServer = require("json-server");

const DB_URL =
  "mongodb+srv://3xbun-user:top2541top@test0.hqdnz.mongodb.net/mdPickup?retryWrites=true&w=majority";

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error: ")
);

const QueuesSchema = new mongoose.Schema({
  datetime: { type: Date, default: Date.now },
  id: { type: String, required: true },
  name: { type: String, required: true },
  class: { type: String, required: true },
  pickupType: { type: String, required: true },
});

const Queues = mongoose.model("Queues", QueuesSchema);

module.exports = { jsonServer, Queues };
