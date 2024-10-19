const express = require("express");
const router = express.Router();

// Sample data
const items = [
    { id: 1, name: "Item 1", description: "This is item 1." },
    { id: 2, name: "Item 2", description: "This is item 2." },
];

// GET route for fetching items
router.get("/api/items", (req, res) => {
    res.json(items);
});

// GET route for fetching a single item by ID
router.get("/api/items/:id", (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send("Item not found");
    res.json(item);
});

// Export the router
module.exports = router;
