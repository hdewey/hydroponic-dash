const express = require('express');
const app = express();
const port = 8080;

const schedule = require('node-schedule');
const bucket = require('./modules/download.js');

//bucket.clean().catch((err) => {console.log('error / warning:', err)});
//bucket.download().catch((err) => {console.log('error / warning:', err.code)});

var c = schedule.scheduleJob('1 * * * *', function() {
  bucket.clean().catch((err) => {console.log('error / warning:', err)});
})

var c = schedule.scheduleJob('3 * * * *', function() {
  bucket.download().catch((err) => {console.log('error / warning:', err.code)});
})

app.use(express.static('public'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
