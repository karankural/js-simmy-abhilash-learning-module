const supertest = require("supertest");
const assert = require('assert');
// const app = require("../index");
var utility = require('../helper/utility');
let baseURL = "https://reqres.in";

describe("Get API", function() {
    it("List Users", function(done) {    
        utility.getRequest(baseURL, "/api/users/2", 200, (response) => {
            console.log(JSON.stringify(response));
            done();
        })
    })

    // it("Single User", function(done) {
    //     utility.getRequest(baseURL, "/api/users/2", 200, (response) => {
    //         console.log(JSON.stringify(response));
    //         done();
    //     })
    // })

    // it("List Unknowns", function(done) {
    //     utility.getRequest(baseURL, "/api/unknown", 200, (response) => {
    //         console.log(JSON.stringify(response));
    //         done();
    //     })
    // })
});