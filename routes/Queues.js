const express = require("express");
const dayjs = require("dayjs");
const db = require("../database/db");

const router = express.Router();

// router.get("/", (req, res) => res.send("Hello lowdb!"));
// router.post("/add", (req, res) => res.send("post ok"));
// router.put("/update/:id", (req, res) => res.send("put ok"));
// router.delete("/delete/:id", (req, res) => res.send("delete ok"));

// Get queues
router.get("/", (req, res) => {
  const queues = db.get("queues").value();
  res.json(queues);
});

// Add queue
router.post("/add/queue", (req, res) => {
  const queue = {
    time: dayjs(),
    id: req.body.id,
    name: req.body.name,
  };

  db.get("queues").push(queue).last().write();

  res.json(queue);
});

// Delete queue
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const queueID = db.get("queues").find({ id: id }).value();

  db.get("queues").remove({ id: id }).write();

  res.json(queueID);
});

module.exports = router;
