const express = require("express");
const dayjs = require("dayjs");
const { Queues } = require("../database/db");

const router = express.Router();

// Get queues
router.get("/", async (req, res) => {
  const queues = await Queues.find();
  res.json(queues);
});

// Get queue by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const queue = await Queues.findOne({ id: id });

  res.json(queue);
});

// Add queue
router.post("/add/queue", async (req, res) => {
  const queue = new Queues({
    id: String(req.body.id),
    name: req.body.name,
    class: req.body.class,
    pickupType: req.body.pickupType,
  });

  await queue.save();

  return res.status(201).json(queue);
});

// Delete queue
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await Queues.findOneAndDelete({ id: id });

  res.status(200);
});

module.exports = router;
