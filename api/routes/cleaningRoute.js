const express = require('express');
const router = express.Router();
const CleaningController = require('../controllers/cleaningController');
//HANDLE INCOMING REQUESTS TO /ORDERS



router.post("/cleaningPrice", CleaningController.cleaningPrice);
module.exports = router;