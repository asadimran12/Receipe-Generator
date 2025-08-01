const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const serverless = require("serverless-http");
require("dotenv").config();

// Import your routers
const authrouter = require("../Router/authrouter");
const recepierouter = require("../Router/Receiperouter");

const app = express();

// ✅ CORS config — allow only your frontend
const corsOptions = {
  origin: "https://receipe-generator-g9wk.vercel.app/", // ✅ No trailing slash
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authrouter);
app.use("/api/recipe", recepierouter);

// ✅ Test endpoint (optional)
app.get("/api/ping", (req, res) => {
  res.json({ message: "pong" });
});

// ✅ MongoDB connection (only once)
mongoose.connect(process.env.MONOGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ✅ Export for Vercel Serverless Function
module.exports = app;
module.exports.handler = serverless(app);
