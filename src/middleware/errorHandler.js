const { logEvents } = require("./logEvents");

const errorHandler = (err, req, res, next) => {
  logEvents(`${err.name}\t${err.message}\n`, "errLog.txt");
  console.error(err.stack);
  res.status(500).send(err.message); //500 is server error
};

module.exports = errorHandler;
