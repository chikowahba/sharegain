const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const privateLessonRoute = require('./api/routes/privateLessonRoute');
const cleaningRoute = require('./api/routes/cleaningRoute');

app.use(bodyParser.json());
app.use("/lessons", privateLessonRoute);
app.use("/cleaning", cleaningRoute)

module.exports = app;

// api example call
// http://localhost:3001/cleaning/cleaningPrice