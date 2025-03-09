import express from "express";
const app = express();

app.get("/", function (req, res) {
  const username = req.headers["username"]; // Correct way to access headers
  const password = req.headers["password"];
  const kidneyId = Number(req.query.kidneyId); // Convert to number

  if (username === "sumit" && password === "sg") {
    if (kidneyId === 1 || kidneyId === 2) {
      res.json({ msg: "Your kidney is healthy" });
    } else {
      res.json({ msg: "Bad input" });
    }
  } else {
    res.status(401).json({ msg: "Unauthorized" }); // Send a response if authentication fails
  }
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
