const supertest = require("supertest");
let baseURL = "https://reqres.in";
let assert = require('chai').assert;
let expect = require('chai').expect;

module.exports = {
    getRequest: (url, endpoint, statusCode, callback) => {
        supertest(url)
        .get(endpoint) 
        .end(function(err, res){
          if(err) {
            return callback(err.body);
          }
          console.log('>>>>>>>>' + JSON.stringify(res.status))
          assert.equal(res.status, statusCode, "Value not matched matched")
          return callback(res);
        });
    },

    getRequest1: (endpoint, statusCode, callback) => {
        supertest(baseURL)
        .get(endpoint)   
        .end(function(err, res){    
          if(err) {
            return callback(res.body);
          }
          assert.equal(res.status, statusCode, "Value not matched matched")
          return callback(res.body);
        });
    },

    assertEqual: (acutalResponse, expectedResponse) => {
        assert.equal(acutalResponse,expectedResponse)
    },

    expectEqual: (acutalResponse, expectedResponse) => {
      expect(acutalResponse).to.eql(expectedResponse);
     // assert.equal(acutalResponse,expectedResponse)
  }
}

