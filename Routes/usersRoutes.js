const express = require("express");

const router = express.Router();

let users = [
    { id: 1, name: "Rahul", email: "rahul@gmail.com" },
    { id: 2, name: "Priya", email: "priya@gmail.com" },
    { id: 3, name: "Aman", email: "aman@gmail.com" }
];


// GET all users
router.get("/", (req, res) => {
    res.json(users);
});


// GET single user
router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find((user) => {
        return user.id === id;
    });

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
});


// CREATE user
router.post("/", (req, res) => {

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required"
        });
    }

    const newUser = {
        id: users.length + 1,
        name: name,
        email: email
    };

    users.push(newUser);

    res.status(201).json(newUser);
});


// UPDATE user
router.put("/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find((user) => {
        return user.id === id;
    });

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    res.json(user);
});


// DELETE user
router.delete("/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = users.findIndex((user) => {
        return user.id === id;
    });

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users.splice(index, 1);

    res.json({
        message: "User deleted"
    });
});


module.exports = router;