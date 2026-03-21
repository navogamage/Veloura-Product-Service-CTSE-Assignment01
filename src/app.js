const express = require("express");
const cors = require("cors");
const { corsOptions } = require("./config/cors");

const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/products", require("./routes/productRoutes"));

app.get("/", (req, res) => {
	res.send("Product Service Running");
});

module.exports = app;
