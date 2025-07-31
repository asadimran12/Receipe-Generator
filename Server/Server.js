const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const authrouter=require("./Router/authrouter");
const recepierouter=require("./Router/Receiperouter")

const app = express();
app.use(cors());
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],    
  credentials: true       
}));


app.use("/api/auth",authrouter);
app.use("/api/recpie",recepierouter);

mongoose.connect(process.env.MONOGO_URL)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => console.error(err));


app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server running on port ${process.env.PORT}`)
})