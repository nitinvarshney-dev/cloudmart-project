const express = require("express");

const app = express();

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 }
  ]);
});

app.listen(5002, () => {
  console.log("Product Service running on port 5002");
});