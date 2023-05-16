const express = require("express");
const cowsay = require("cowsay");
const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// routes
app.get("/get_username", (req, res) => {
  function returnStudentObject() {
    const student = {
      name: "Cameron",
      securityClearance: "level 1",
    };
    return student;
  }
  const user = returnStudentObject();
  res.send(user.name);
});

app.get("/get_users", (req, res) => {
  console.log("get user");
  res.send("completed");
});

app.post("/create_user", (req, res) => {
  const studentToAdd = req.body.studentName;
  res.send(`you added ${studentToAdd}`);
});

app.post("/capitalize_student_names", (req, res) => {
  const studentToAdd = req.body.studentName.toUpperCase();
  res.send(`you added ${studentToAdd}`);
});

app.post("/add_user_id", (req, res) => {
  const student = {
    name: req.body.studentName,
    id: req.body.id,
  };
  res.send(student);
});

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
      r: true,
      T: "U ",
    })
  );
});

app.listen(PORT, console.log(`running on port ${PORT}`));
