import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>REACT IS EXCLELLENT</h1>`);
});

app.listen(7777, () => console.log("server is listening"));
