const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.MYSQLHOST || process.env.DB_HOST,
  user: process.env.MYSQLUSER || process.env.DB_USER,
  password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD,
  database: process.env.MYSQLDATABASE || process.env.DB_NAME,
  port: process.env.MYSQLPORT || process.env.DB_PORT || 3306,
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

/* CREATE ENQUIRY */
app.post("/api/enquiries", (req, res) => {
  const {
    enquiry_type,
    name,
    email,
    company,
    suburb,
    phone,
    message,
  } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Name, email and message are required.",
    });
  }

  if (enquiry_type === "commercial" && !company) {
    return res.status(400).json({
      message: "Company is required for commercial enquiries.",
    });
  }

  const sql = `
    INSERT INTO enquiries (
      enquiry_type,
      name,
      email,
      company,
      suburb,
      phone,
      message
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      enquiry_type || "general",
      name,
      email,
      company || null,
      suburb || null,
      phone || null,
      message,
    ],
    (err, result) => {
      if (err) {
        console.error("Insert enquiry error:", err);
        return res.status(500).json({
          message: "Failed to submit enquiry.",
        });
      }

      res.status(201).json({
        message: "Enquiry submitted successfully.",
        enquiryId: result.insertId,
      });
    }
  );
});

/* GET ALL ENQUIRIES */
app.get("/api/enquiries", (req, res) => {
  const sql = `
    SELECT *
    FROM enquiries
    ORDER BY created_at DESC, id DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Fetch enquiries error:", err);
      return res.status(500).json({
        message: "Failed to fetch enquiries.",
      });
    }

    res.json(results);
  });
});

/* DELETE ENQUIRY */
app.delete("/api/enquiries/:id", (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM enquiries WHERE id = ?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Delete enquiry error:", err);
      return res.status(500).json({
        message: "Failed to delete enquiry.",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Enquiry not found.",
      });
    }

    res.json({
      message: "Enquiry deleted successfully.",
    });
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});