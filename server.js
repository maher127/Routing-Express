const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  if (new Date().getHours() < 8 || new Date().getHours() > 18) {
    return res.sendFile(__dirname + "/public/horsline.html");
  } else res.sendFile(__dirname + "/public/home.html");
});

app.listen(3000, err => {
  if (err) console.log("server is not running");
  else console.log("server is running on port 3000");
});
