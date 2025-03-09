import express from "express";
const app = express();
const user = [
  {
    name: "John",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];
app.use(express.json());
app.get("/", function (req, res) {
  const johnKidneys = user[0].kidneys;
  const numberOfKidney = johnKidneys.length;
  let numberOfHealthyKidney = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidney++;
    }
  }
  const numberOfUnHealthyKidney = numberOfKidney - numberOfHealthyKidney;
  res.send(
    `John has ${numberOfKidney} kidneys, ${numberOfHealthyKidney} are healthy, and ${numberOfUnHealthyKidney} are unhealthy.`
  );
});
app.post("/kidneychanged", function (req, res) {
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({
    healthy: isHealthy,
  });
  res.send("Kidney changed successfully with healthy kidney");
});

app.put("/allHealthyKidneys", function (req, res) {
  for (let i = 0; i < user[0].kidneys.length; i++) {
    user[0].kidneys[i].healthy = true;
  }
  res.json({});
});
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
