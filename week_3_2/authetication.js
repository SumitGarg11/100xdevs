import express from "express";
import jwt from "jsonwebtoken";
const jwtPassword = "123456";
const app = express();
app.use(express.json());
const userData = [
  {
    username: "sumit@gmail.com",
    password: "123456",
    name: "sumit",
  },
  {
    username: "prakash@gmail.com",
    password: "123456",
    name: "prakash",
  },
  {
    username: "rahul@gmail.com",
    password: "123456",
    name: "rahul",
  },
];
function userExist(username, password) {
  let userexit = false;
  for (let i = 0; i < userData.length; i++) {
    if (
      userData[i].username === username &&
      userData[i].password === password
    ) {
      userexit = true;
    }
  }
  return userexit;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  if (!userExist(username, password)) {
    return res.status(403).json({ error: "user not exits" });
  }
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({ token });
});
app.get("/users", function (req, res) {
  let token = req.headers["authorization"];
  const decode = jwt.verify(token, jwtPassword);
  const username = decode.username;
  res.json({ users: userData });
});
app.listen(3000, function () {
  console.log("server is running on port 3000");
});
