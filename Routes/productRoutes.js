const express = require("express");

const router = express.Router();

let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 1000 },
    { id: 3, name: "Keyboard", price: 2500 }
];


// GET all products
router.get("/", (req, res) => {

    res.json(products);

});


// GET single product
router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const product = products.find((product) => {
        return product.id === id;
    });

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});


// CREATE product
router.post("/", (req, res) => {

    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({
            message: "Name and price required"
        });
    }

    const product = {
        id: products.length + 1,
        name: name,
        price: price
    };

    products.push(product);

    res.status(201).json(product);
});


// UPDATE product
router.put("/:id", (req, res) => {

    const id = Number(req.params.id);

    const product = products.find((product) => {
        return product.id === id;
    });

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;

    res.json(product);
});


// DELETE product
router.delete("/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = products.findIndex((product) => {
        return product.id === id;
    });

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products.splice(index, 1);

    res.json({
        message: "Product deleted"
    });
});


module.exports = router;