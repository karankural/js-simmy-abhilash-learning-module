const supertest = require("supertest");
const assert = require('assert');
// const app = require("../index");
var utility = require('../helper/utility')
let baseURL = "https://reqres.in";


describe("Get API", function() {
  it("List Users", function(done) {
    supertest("https://reqres.in")
      .get("/api/users?page=2")
      .expect(200)
      .end(function(err, res){
        console.log(JSON.stringify(res))
        if (err) done(err);
        done();
      });
  });

  it("Single User", function(done) {
    supertest("https://reqres.in")
      .get("/api/users/2")
      .expect(200)
      .end(function(err, res){
        console.log(JSON.stringify(res))
        if (err) done(err);
        done();
      });
  });

  it("List Unknowns", function(done) {
    supertest("https://reqres.in")
      .get("/api/unknown")
      .expect(200)
      .end(function(err, res){
        console.log(JSON.stringify(res))
        if (err) done(err);
        done();
      });
  });
});