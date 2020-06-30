const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '../public/index.html'));
app.use(express.json());

app.get('/:listingId', (req, res) => {
  console.log('GET')
  console.log('path: ', req.path)
  const listingPage = path.join(__dirname, '../public/index.html')
  res.sendFile(listingPage);
})


module.exports.app = app;