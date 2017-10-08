const express = require('express');
const path = require('path');
require('dotenv').config({path: 'oAuth.env'})
const app = express();

app.use('/api/discord', require('./api/discord'));

app.get('/', function(req, res) {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function() {
  console.info('Running on port 3000');
});
