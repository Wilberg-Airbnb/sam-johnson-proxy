const express = require('express');
const app = express();
const path = require('path');

app.use('/:listingId', express.static(path.join(__dirname, '../public/index.html')));
// app.use(express.json());

// app.get('/:listingId', (req, res) => {
//   console.log('GET')
//   console.log('path: ', req.path)
//   res.end()
// })

module.exports.app = app;