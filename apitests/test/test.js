let assert = require('assert');
let request = require('supertest')

describe("Suite", () => {
    it('TEst case', (done) => {
        request('https://reqres.in')
        .get('/api/users/2')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
            console.log(JSON.stringify(res))
            done()
        })
    })
})