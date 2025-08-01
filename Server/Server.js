const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authrouter = require("./Router/authrouter");
const recepierouter = require("./Router/Receiperouter");

const app = express();

// ✅ Only this CORS setup — no duplicates
const corsOptions = {
  origin: 'https://receipe-generator-g9wk.vercel.app', // ✅ NO trailing slash
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
};

app.use(cors(corsOptions)); // ✅ Correct place
app.use(express.json());

app.use("/api/auth", authrouter);
app.use("/api/recipe", recepierouter);

mongoose.connect(process.env.MONOGO_URL)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => console.error(err));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
