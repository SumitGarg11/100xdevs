import express from "express";
import zod from "zod";
const app = express();
const schema = zod.array(zod.number());
app.use(express.json());
app.post("/check", function (req, res) {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  const result = schema.safeParse(kidneys);
  console.log(result);
  res.json({ result }); // if instead of kidneys come then its give me proper error message even i not write
});
app.listen(3000, function () {
  console.log("server is running on port 3000");
});
