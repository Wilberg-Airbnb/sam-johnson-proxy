const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

app.use('/:listingId', express.static(__dirname + '../../public'));
app.use(express.json());

// app.get('/api/reservation/:listingId', (req, res) => {
//   console.log('GET')
//   console.log('path: ', req.params.listingId)
//   axios.get(`http://localhost:5000/api/reservation/${req.params.listingId}`)
//     .then(data => {
//       console.log('data from reservation: ', data);
//       res.send(data.data)
//     })
//     .catch(err => {
//       console.log('failed to get reservation data for listing', err)
//     })
// })

module.exports.app = app;