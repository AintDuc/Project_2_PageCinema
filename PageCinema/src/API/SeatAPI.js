const express = require("express");
const seatAPIRouter = new express.Router();
const fs = require("fs");
const genData = require("./genData");
// let log = console.log;
seatAPIRouter.get("/api/seats", (req, res) => {
  let dataJSON = [];
  genData();
  const path = __dirname + "/dataJSON.json";
  fs.readFile(path, (err, data) => {
    if (err) {
      throw err;
    }
    dataJSON = JSON.parse(data);
    res.status(201).send(dataJSON);
  });
});
// thành kông =))

module.exports = seatAPIRouter;
