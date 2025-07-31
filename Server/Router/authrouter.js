const express = require('express');
const SendMagicLink  = require('../controller/auth_controller');
const router = express.Router();

router.post('/magiclink',SendMagicLink);

module.exports = router;
