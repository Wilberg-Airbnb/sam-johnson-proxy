const express = require('express');
const app = express();

app.use(express.static(__dirname + '../public/index.html'));
app.use(express.json());

app.get('/:listingId', (req, res) => {
  console.log('GET')
  console.log('path: ', req.path)
  res.send(`listing item ${req.path.slice(1)}`);
})


module.exports.app = app;