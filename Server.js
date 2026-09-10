const express = require("express");

const app = express();

app.use(express.json());


// Import routes
const usersRoutes = require("./Routes/usersRoutes");
const productRoutes = require("./Routes/productRoutes");
const orderRoutes = require("./Routes/orderRoutes");


// Use routes
app.use("/users", usersRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);


app.listen(3000, () => {
    console.log("Server running on port 3000");
});