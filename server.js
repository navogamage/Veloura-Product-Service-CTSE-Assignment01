require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5002;

// MongoDB connection
connectDB();
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error("MongoDB connection error:", error);
});