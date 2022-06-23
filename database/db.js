const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/db.json");
const db = low(adapter);

const jsonServer = require("json-server");

module.exports = { jsonServer, db };
