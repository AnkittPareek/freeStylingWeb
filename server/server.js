import express from "express";

const app = express();
const jokes = [
  "Why did the tomato turn red?",
  "Because it saw your life and blushed with embarrassment.",
  "Why did the tomato turn red?",
  "Because it saw your future and blushed with anger.",
  "Why did the tomato turn red?",
  "Because it saw your grandchildren and blushed with shame.",
];
app.get("/", (req, res) => {
  res.json({ message: "Server Running" });
});
app.get("/", (req, res) => {
  res.json({ message: "Server Running" });
});

app.get("/jokes", (req, res) => {
  res.send(jokes);
});

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log("Server is running on port 3030");
});
