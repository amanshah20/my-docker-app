const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (like index.html, style.css)
app.use(express.static(path.join(__dirname, "public")));

// Health check endpoint (used in prod Jenkinsfile)
app.get("/health", (req, res) => {
  res.status(200).send("OK - App is healthy ✅");
});

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
