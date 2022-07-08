require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);

const PORT = "https://glacial-brushlands-41440.herokuapp.com""
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
