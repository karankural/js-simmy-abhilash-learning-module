let assert = require('chai').assert;
let request = require('supertest');



describe("Suite", (done) => {
    it('Get Test case', () => {
        request('https://reqres.in')
        .get('/api/users/2')
        .expect(200)
        .end((err, res) => {
            console.log(JSON.stringify(err))
            console.log(JSON.stringify(res))
            done();
        })
    })
    it('Post Test case', (done) => {
        request('https://reqres.in')
        .post('/api/users')
        .send({
            "name": "morpheus",
            "job": "leader"
        })
        .set('Accept', 'application/json')
        .expect(200,'Content-Type', /json/)
        .expect(200)
        .end((err,res) => {
            console.log(JSON.stringify(err))
            console.log(JSON.stringify(res))
            done();
        })
    })

    it('Put Test case', (done) => {
        request('https://reqres.in')
        .put('/api/users/2')
        .send({
            "name": "morpheus",
            "job": "zion residents"
        })
        .expect(200, {
            job:'zion residents'})
        .end((err, res) => {
            console.log(JSON.stringify(err))
            console.log(JSON.stringify(res))
            done();
        })
})
})

// describe('GET /user', function() {
//     it('responds with json', function(done) {
//       request('https://reqres.in')
//         .get('/api/users?page=2')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200)
//         .end(function(err, res) {
//                 if (err) 
//                     return done(err);
//                 done();
//                 console.log(JSON.stringify(res));
//               });
             
//     });
//   });

describe('GET /users', function() {
    it('responds with json', function(done) {
         request('https://reqres.in')
        .get('/api/users/8')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err,res) => {
            console.log(JSON.stringify(err))
            console.log(JSON.stringify(res))
            assert.equal(res.body.data.first_name, 'Simmy')
            done();
        })
        // .end((err, response) => {
            
        //     // console.log(response.body.data.first_name);
        //     assert(response.body.data.first_name, 'Simmy');
        //     if(err){
        //         console.log(JSON.stringify(err)); 
        //         console.log('I am not a fool');
        //     }
        //     console.log('I am fool');
        //     done();
        // })
        
    });
  });