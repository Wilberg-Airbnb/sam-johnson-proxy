const { app } = require('./index.js');

app.listen(8888, () => {
  console.log('server listening on port 8888!');
})

app.get('/api/reservation/:listingId', (req, res) => {
  res.redirect(`http://3.19.16.18/api/reservation/${req.params.listingId}`)
})

app.get('/api/location/:listingId', (req, res) => {
  res.redirect(`http://ec2-3-12-169-208.us-east-2.compute.amazonaws.com:2001/api/location/${req.params.listingId}`)
})

app.get('/:listingId/airbrb_home.png', (req, res) => {
  res.redirect(`http://ec2-3-12-169-208.us-east-2.compute.amazonaws.com:2001/${req.params.listingId}/airbrb_home.png`)
})

app.get('/api/description/:listingId', (req, res) => {
  res.redirect(`http://ec2-3-15-150-168.us-east-2.compute.amazonaws.com:4000/api/description/${req.params.listingId}`)
})

app.get('/api/suggestions/:listingId', (req, res) => {
  res.redirect(`http://ec2-3-129-14-177.us-east-2.compute.amazonaws.com:8081/api/suggestions/${req.params.listingId}`)
})

app.get('/api/reviews/:listingId', (req, res) => {
  console.log('reviews')
  if (req.query.type === 'review') {res.redirect(`http://ec2-3-129-14-177.us-east-2.compute.amazonaws.com:8080/api/reviews/${req.params.listingId}?type=review`)}
  res.redirect(`http://ec2-3-129-14-177.us-east-2.compute.amazonaws.com:8080/api/reviews/${req.params.listingId}`)
})