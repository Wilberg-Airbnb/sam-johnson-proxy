const axios = require('axios');
const fs = require('fs');

axios.get('http://localhost:5000/public/bundle.js')
  .then(res => {
    fs.writeFile('./public/resBundle.js', res.data, (err) => {
      if (err) {console.log('get bundle failed: ', err)};
      console.log('reservation bundle updated')
    })
  })
  .catch(err => {
    console.log('getting bundle failed: ', err);
  })