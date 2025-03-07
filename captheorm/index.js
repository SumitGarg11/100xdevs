const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

let isLeader = process.env.LEADER === "true";
let bookHolder = null;

app.post("/borrow-book", function (req, res) {
  const { studentId } = req.body;
  if (!isLeader) {
    return res.status(503).json({ message: "Libraian unavailabe" });
  }
  if (bookHolder) {
    return res.status(409).json({ message: "Book already borrowed" });
  }
  bookHolder = studentId;
  res.json({ message: "Book borrowed by ", bookHolder });
});

app.get("/book-status", function (req, res) {
  res.json({ bookHolder });
});

app.post("/return-book", function (req, res) {
  const { studentId } = req.body;
  if (!isLeader) {
    return res.status(503).json({ message: "Leader unavailable" });
  }
  if (bookHolder !== studentId) {
    return res.status(403).json({ message: "You do not have the book." });
  }
  bookHolder = null;
  res.json({ message: "Book returned successfully" });
});

app.listen(port, () => {
  console.log(`Library system running on port ${port} (Leader: ${isLeader})`);
});
