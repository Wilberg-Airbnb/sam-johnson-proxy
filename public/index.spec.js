const $ = require('jquery');
const axios = require('axios');

describe('index.html CDNs', () => {

  it('should get bundle for reservation @ localhost 5000', async (done) => {

    axios.get('http://localhost:5000/public/bundle.js')
      .then(doc => {

        expect(doc.status).toEqual(200)
        expect(doc.data).toContain("document.getElementById('reservation')")
        done()
      })

  })

  it('should get bundle for description @ localhost 4000', async (done) => {

    axios.get('http://localhost:4000/public/bundle.js')
      .then(doc => {

        expect(doc.status).toEqual(200)
        expect(doc.data).toContain("document.getElementById('description')")
        expect(doc.data).toContain("document.getElementById('description-modal-root')");
        done()
      })

  })

  xit('should get bundle for location @ localhost 2001', async (done) => {

    axios.get('http://localhost:2001/public/bundle.js')
      .then(doc => {

        expect(doc.status).toEqual(200)
        expect(doc.data).toContain(`location`);
        expect(doc.data).toContain(`document.getElementById('about-modal'))`)
        done()
      })

  })

  it('should get bundle for location @ localhost 2001', async (done) => {

    axios.get('http://localhost:8080/bundle.js')
      .then(doc => {

        expect(doc.status).toEqual(200)
        expect(doc.data).toContain(`document.getElementById('review'))`)
        done()
      })

  })
})