const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const logEvents = require("./logEvents");
const EventEmitter = require("events");
// Creates your own Emitter class that inherits all EventEmitter powers
class Emitter extends EventEmitter {}

// Initialize object
const myEmitter = new Emitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

//add listener for the log event
// myEmitter.on("log", (msg) => logEvents(msg));
// myEmitter.emit("log", "Log event emitted!");

server.listen(PORT, () => console.log(`Server running on ${PORT}`));
