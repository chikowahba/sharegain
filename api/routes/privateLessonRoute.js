const express = require('express');
const router = express.Router();
const PrivateLessonController = require('../controllers/privateLessonController');
//HANDLE INCOMING REQUESTS TO /ORDERS



router.post("/lessonPrice", PrivateLessonController.lessonPrice);
module.exports = router;