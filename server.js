const express = require('express');
const app = express();
const port = 8080;

const bucket = require('./modules/download.js');

// bucket.clean().catch((err) => {console.log('error / warning:', err)});
// bucket.download().catch((err) => {console.log('error / warning:', err.code)});

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
