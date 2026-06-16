const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",
    database: "user_management"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed");
        return;
    }

    console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
    res.send("Database API is working");
});

app.get("/users", (req,res) => {

    db.query(
        "SELECT * FROM users",
        (err,results) => {
            if(err){
                res.status(500).json({
                    message:"Database error"
                });
                return;
            }
            res.json(results);
        }
    );
});

app.get("/users/:id", (req,res) => {

    const userId = req.params.id;

    db.query(
        "SELECT * FROM users WHERE id = ?",
        [userId],(err,results) => {

            if (err) {
                return res.status(500).json({
                    message: "Database error"
                });
            }
            if (results.length === 0){
                return res.status(404).json({
                    message:"User not found"
                });
            }
            res.json(results[0]);
        }
    );
});

app.post("/users", (req, res) => {

    const { name, email, age } = req.body;

    db.query(
        "INSERT INTO users (name, email, age) VALUES (?, ?, ?)",
        [name, email, age],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database error"
                });
            }

            res.json({
                message: "User added successfully",
                id: result.insertId
            });

        }
    );

});

app.put("/users/:id", (req, res) => {

    const userId = req.params.id;

    const { name, email, age } = req.body;

    db.query(
        "UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?",
        [name, email, age, userId],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database error"
                });
            }

            res.json({
                message: "User updated successfully"
            });

        }
    );

});

app.delete("/users/:id", (req, res) => {

    const userId = req.params.id;

    db.query(
        "DELETE FROM users WHERE id = ?",
        [userId],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database error"
                });
            }

            res.json({
                message: "User deleted successfully"
            });

        }
    );

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});