import express from "express";
const app = express();
app.get(
  "/",
  function (req, res, next) {
    console.log("hii from middleware 1");
    next();
  },
  function (req, res) {
    console.log("hii from middleware 2");
    res.send("Hello from middleware");
  }
);
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
