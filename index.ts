import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello from server.");
});

app.listen(PORT, () => {
  console.log("Server is listening on port ", PORT);
});
