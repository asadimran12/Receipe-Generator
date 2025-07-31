const express = require('express');
const generateRecipe  = require('../controller/receipe_controller');
const router = express.Router();

router.post('/generate',generateRecipe);

module.exports = router;
