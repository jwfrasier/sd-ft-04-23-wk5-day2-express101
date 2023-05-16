const express = require("express");
const cowsay = require("cowsay");
const app = express();

app.use(express.json());

app.get("/get_cow", (req, res) => {
  res.send(
    cowsay.say({
      text: "I'm a moooodule",
      e: "oO",
      T: "U ",
    })
  );
});
app.post("/think_cow", (req, res) => {
  res.send(
    cowsay.think({
      text: req.body.message,
      e: "oO",
      T: "U ",
    })
  );
});

app.post("/think_squirrel", (req, res) => {
  res.send(
    cowsay.say({
      text: req.body.message,
      e: "@@",
      f: "squirrel",
      T: "U ",
    })
  );
});

app.listen(PORT, console.log(`running on port ${PORT}`));
