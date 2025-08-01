const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const serverless = require("serverless-http");
require('dotenv').config();

const authrouter = require('../Router/authrouter');
const recepierouter = require('../Router/Receiperouter');

const app = express();

const corsOptions = {
  origin: 'https://receipe-generator-g9wk.vercel.app', // ✅ Correct — no trailing slash
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 
app.use(express.json());

// ✅ Mount your routes
app.use('/api/auth', authrouter);
app.use('/api/recipe', recepierouter);

// ✅ MongoDB connection
mongoose.connect(process.env.MONOGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// ❌ DO NOT add app.listen() for Vercel

module.exports = app;
module.exports.handler = serverless(app); // ✅ Export for Vercel
