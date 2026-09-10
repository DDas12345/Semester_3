const express = require("express");

const router = express.Router();

let users = [
    { id: 1, name: "Rahul", email: "rahul@gmail.com" },
    { id: 2, name: "Priya", email: "priya@gmail.com" },
    { id: 3, name: "Aman", email: "aman@gmail.com" }
];

let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 1000 },
    { id: 3, name: "Keyboard", price: 2500 }
];

let orders = [
    { id: 1, userId: 1, productId: 2, quantity: 2 },
    { id: 2, userId: 2, productId: 1, quantity: 1 }
];


// GET all orders
router.get("/", (req, res) => {

    res.json(orders);

});


// GET single order
router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const order = orders.find((order) => {
        return order.id === id;
    });

    if (!order) {
        return res.status(404).json({
            message: "Order not found"
        });
    }

    res.json(order);
});


// CREATE order
router.post("/", (req, res) => {

    const { userId, productId, quantity } = req.body;

    // Check user
    const user = users.find((user) => {
        return user.id === userId;
    });

    if (!user) {
        return res.status(404).json({
            message: "User does not exist"
        });
    }


    // Check product
    const product = products.find((product) => {
        return product.id === productId;
    });

    if (!product) {
        return res.status(404).json({
            message: "Product does not exist"
        });
    }


    // Create order
    const newOrder = {
        id: orders.length + 1,
        userId: userId,
        productId: productId,
        quantity: quantity || 1
    };

    orders.push(newOrder);

    res.status(201).json(newOrder);
});


// UPDATE order
router.put("/:id", (req, res) => {

    const id = Number(req.params.id);

    const order = orders.find((order) => {
        return order.id === id;
    });

    if (!order) {
        return res.status(404).json({
            message: "Order not found"
        });
    }

    order.quantity = req.body.quantity || order.quantity;

    res.json(order);
});


// DELETE order
router.delete("/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = orders.findIndex((order) => {
        return order.id === id;
    });

    if (index === -1) {
        return res.status(404).json({
            message: "Order not found"
        });
    }

    orders.splice(index, 1);

    res.json({
        message: "Order deleted"
    });
});


// GET orders of a particular user
router.get("/user/:id/orders", (req, res) => {

    const userId = Number(req.params.id);

    const userOrders = orders.filter((order) => {
        return order.userId === userId;
    });

    res.json(userOrders);
});


// GET orders containing a particular product
router.get("/product/:id/orders", (req, res) => {

    const productId = Number(req.params.id);

    const productOrders = orders.filter((order) => {
        return order.productId === productId;
    });

    res.json(productOrders);
});


module.exports = router;