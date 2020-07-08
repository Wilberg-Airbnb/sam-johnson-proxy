const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

app.use('/:listingId', express.static(__dirname + '../../public'));
app.use(express.json());

module.exports.app = app;