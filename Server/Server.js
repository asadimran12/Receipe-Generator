const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authrouter = require('./Router/authrouter');
const recepierouter = require('./Router/Receiperouter');

const app = express();

// ✅ Proper CORS config — adjust only origin
const corsOptions = {
  origin: 'https://receipe-generator-g9wk.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
};

app.use(cors(corsOptions));           // ✅ apply CORS globally
app.options('*', cors(corsOptions));  // ✅ handle preflight

app.use(express.json());

// ✅ Routes
app.use('/api/auth', authrouter);
app.use('/api/recipe', recepierouter);

// ✅ MongoDB connection
mongoose.connect(process.env.MONOGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// ✅ Server listening
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
