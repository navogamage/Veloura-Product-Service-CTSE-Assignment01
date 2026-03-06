const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/images', express.static('src/utils/images'));
app.use('/api/products', require('./routes/productRoutes'));

app.get("/", (req, res) => {
    res.send("Product Service Running");
});

module.exports = app;