const express = require("express");
const dayjs = require("dayjs");
const { db } = require("../database/db");

const router = express.Router();

// Get queues
router.get("/", (req, res) => {
  const queues = db.get("queues").value();
  res.json(queues);
});

// Get queue by ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const queue = db.get("queues").find({ id: id }).value();

  res.json(queue);
});

// Add queue
router.post("/add/queue", (req, res) => {
  const queue = {
    time: dayjs(),
    id: String(req.body.id),
    name: req.body.name,
    class: req.body.class,
    pickupType: req.body.pickupType,
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
