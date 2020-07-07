const supertest = require('supertest');
const { app } = require('./index.js');
const request = supertest(app);

describe('/:listingId', () => {

  it('should serve static files at listingIds 0-99', async (done) => {

    const res = await request.get('/32/')

    expect(res.status).toBe(200)
    expect(res.text).toContain('html')
    done()
  })

})