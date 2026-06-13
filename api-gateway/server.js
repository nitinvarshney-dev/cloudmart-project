const express = require("express");
const axios = require("axios");

const app = express();

app.get("/api/users", async (req, res) => {
  const response = await axios.get("http://localhost:5001/users");
  res.json(response.data);
});

app.get("/api/products", async (req, res) => {
  const response = await axios.get("http://localhost:5002/products");
  res.json(response.data);
});

app.get("/api/orders", async (req, res) => {
  const response = await axios.get("http://localhost:5003/orders");
  res.json(response.data);
});

app.listen(5000, () => {
  console.log("API Gateway running on port 5000");
});