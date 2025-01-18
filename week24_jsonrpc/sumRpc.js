const express = require("express");
const app = express();
app.use(express.json());
function addNum(a, b) {
  return a + b;
}
app.post("/rpc", function (req, res) {
  const { a, b } = req.body;
  if (typeof a !== "number" || typeof b !== "number") {
    res
      .status(400)
      .json({ error: "Invalid input. Both a and b should be numbers." });
    return;
  }
  const result = addNum(a, b);
  res.json({ result });
});
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
