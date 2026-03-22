const express = require("express");
const cors = require("cors");
const path = require("path");
const YAML = require("yamljs");
const swaggerUi = require("swagger-ui-express");
const { corsOptions } = require("./config/cors");

const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/products", require("./routes/productRoutes"));

const swaggerDocument = YAML.load(path.join(__dirname, "..", "openapi.yaml"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
	res.send("Product Service Running");
});

module.exports = app;
