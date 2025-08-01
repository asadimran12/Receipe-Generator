// api/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const serverless = require("serverless-http");
require('dotenv').config();

const authrouter = require('../Router/authrouter');
const recepierouter = require('../Router/Receiperouter');

const app = express();

const corsOptions = {
  origin: 'https://receipe-generator-g9wk.vercel.app', 
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 
app.use(express.json());

app.use('/api/auth', authrouter);
app.use('/api/recipe', recepierouter);

// Mongo connection only once (make sure this does not run multiple times in serverless)
mongoose.connect(process.env.MONOGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

module.exports = app;
module.exports.handler = serverless(app); // for Vercel serverless function
