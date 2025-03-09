import express from "express";
const app = express();
function ValueOfN(req, res, next) {
  let n = req.query.n;
  if (!n) {
    return res.status(400).json({ msg: "n parameter is required" });
  }
  console.log("value of n is " + n);
  next();
}
app.use(ValueOfN);
app.get("/", function (req, res) {
  res.send("after middle ware  get");
});
app.post("/", function (req, res) {
  res.send("after middle ware post  ");
});
app.listen(3000, function () {
  console.log("server is running on port 3000");
});
