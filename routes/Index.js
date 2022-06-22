const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/pick-up", (req, res) => {
  res.render("pickUp");
});

router.get("/queues", (req, res) => {
  res.render("queues");
});

router.get("/admin", (req, res) => {
  res.render("admin");
});

module.exports = router;
