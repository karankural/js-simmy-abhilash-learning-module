const supertest = require("supertest");
const assert = require('assert');
// const app = require("../index");
var utility = require('../helper/utility')
let baseURL = "https://reqres.in";
let data = require('../data/endpoints.json')

console.log(JSON.stringify(data))

describe("Get API", function() {
    it("List Users", function(done) {    
        utility.getRequest(baseURL, data.listUsers, (response) => {
            console.log(JSON.stringify(response));
            done();
        })
    })

    it("Single User", function(done) {
        utility.getRequest(baseURL, data.singleUser, (response) => {
            console.log(JSON.stringify(response));
            done();
        })
    })

    it("List Unknowns", function(done) {
        utility.getRequest(baseURL, data.unknown, (response) => {
            console.log(JSON.stringify(response));
            done();
        })
    })
});