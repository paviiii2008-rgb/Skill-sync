
const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to SkillSync Backend!");
});

// Add skill exchange request
app.post("/api/exchanges", (req, res) => {
    const { name, teach, learn } = req.body;

    if (
        typeof name !== "string" ||
        typeof teach !== "string" ||
        typeof learn !== "string" ||
        !name.trim() ||
        !teach.trim() ||
        !learn.trim() ||
        name.length > 100 ||
        teach.length > 100 ||
        learn.length > 100
    ) {
        return res.status(400).json({
            message: "Please enter valid details"
        });
    }

    const query = db.prepare(`
        INSERT INTO exchanges (name, teach, learn)
        VALUES (?, ?, ?)
    `);

    const result = query.run(
        name.trim(),
        teach.trim(),
        learn.trim()
    );

    res.status(201).json({
        message: "Skill exchange request submitted successfully!",
        exchangeId: result.lastInsertRowid
    });
});

// Get all exchange requests
app.get("/api/exchanges", (req, res) => {
    const exchanges = db.prepare(
        "SELECT * FROM exchanges ORDER BY id DESC"
    ).all();

    res.json(exchanges);
});

// Get one exchange request
app.get("/api/exchanges/:id", (req, res) => {
    const exchange = db.prepare(
        "SELECT * FROM exchanges WHERE id = ?"
    ).get(req.params.id);

    if (!exchange) {
        return res.status(404).json({
            message: "Exchange request not found"
        });
    }

    res.json(exchange);
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`SkillSync server running on port ${PORT}`);
});
