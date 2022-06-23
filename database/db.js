const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/db.json");
const db = low(adapter);

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./database/Students.json");
const middlewares = jsonServer.defaults();
const PORT = 3000;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log("JSON server is running");
});

module.exports = db;
