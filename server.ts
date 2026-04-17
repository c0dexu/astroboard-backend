import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ value: 123 });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
