const express = require("express");
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
  //  return {
  //  name: "Ashley",
  //  id : 2355
  // }
  const student = {
    name: req.body.studentName,
    id: req.body.id,
  };
  res.send(student);
});

app.listen(PORT, console.log(`running on port ${PORT}`));
