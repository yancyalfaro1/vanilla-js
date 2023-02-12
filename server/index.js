var express = require("express");
var cors = require("cors");

var app = express();

app.use(cors())

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/users", (req, res, next) => {
  res.json([
    { id: 1, name: "Maria", birth: 1990 },
    { id: 2, name: "Luis", birth: 1980 },
  ]);
});
