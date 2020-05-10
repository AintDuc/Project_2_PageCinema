const express = require("express");
const path = require("path");
const app = express();

let log = console.log;
// public directory
const publicDirectory = express.static(path.join(__dirname, "../public"));

// middle ware
app.use(publicDirectory);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/page", "index.html"));
});
app.get("/world-film", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/page", "worldFilm.html"));
});

const port = process.env.port || 5000;
app.listen(port, () => {
  log(`Server is start at ${port}`);
});
