const express = require('express');
const router = express.Router();

router.use('/items', require('./api/itemroutes'));

module.exports = router;