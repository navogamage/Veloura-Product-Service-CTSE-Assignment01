const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));

app.use(express.json());
app.use('/api/products', require('./routes/productRoutes'));

app.get("/", (req, res) => {
    res.send("Product Service Running");
});

module.exports = app;