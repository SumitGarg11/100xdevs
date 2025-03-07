const express = require("express");
const app = express();
const port = 3000;
app.use(express.json()); // // Middleware to parse JSON requests

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// app.post("/con", function (req, res) {
//   res.send({ msg: "2+2 = 4" });
// });

app.post("/fromclient", function (req, res) {
  console.log(req.body); // undefined because
  // Middleware to parse JSON requests
  // This is required to parse JSON data from the client
  app.use(express.json());
  res.send({ msg: "received from client" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
