const express = require("express");
const env = require("dotenv")
const app = express();
const mongoose = require("mongoose");
const path = require("path");

//routes
const userRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");

// environment variable or you can say constants
env.config();

//mongodb connection
//mongodb+srv://root:adminpassword@cluster0.gqtpff3.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.gqtpff3.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
  ).then(() => {
    console.log("Database connected!")
  });

app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));

app.use("/api", userRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});