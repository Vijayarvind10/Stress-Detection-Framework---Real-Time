const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(morgan("dev")); // Logging
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Simple route for homepage
app.get("/", (req, res) => {
    res.send("Welcome to the server!");
});

// Starting the server
app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});
