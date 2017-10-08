const express = require('express');

const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
console.info(CLIENT_ID);
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const redirect = encodeURIComponent('http://localhost:3000/api/discord/callback');

router.get('/login', function(req, res) {
  res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`);
});

module.exports = router;


// Client ID: 366591494775373825
// Client Secret: qgJy9tctCQvasEmf2il7-eOpL4dbWH4h
//
