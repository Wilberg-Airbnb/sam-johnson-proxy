const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

app.use('/:listingId', (req, res, next) => {
  if (req.params.listingId > 99 || req.params.listingId < 0) {
    res.sendStatus(404)
  }
  next()
})
app.use('/:listingId', express.static(__dirname + '../../public'));
app.use(express.json());

module.exports.app = app;