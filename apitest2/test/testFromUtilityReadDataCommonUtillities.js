const supertest = require("supertest");
// const assert = require('assert');
// const app = require("../index");
var utility = require('../helper/utility')
let data = require('../data/endpoints.json')
let getData = require('../data/getData.json')
let assert = require('chai').assert;


describe("Get API", function() {
    // it("List Users", function(done) {    
    //     utility.getRequest1(data.listUsers, 200, (response) => {
    //         console.log(JSON.stringify(response));
    //         done();
    //     })
    // })

    it("Single User", function(done) {
        utility.getRequest1(data.singleUser, getData.statusCode, (response) => {
            console.log(JSON.stringify(response));
            getData.responsePayload.data.email = "karankural@gmail.com";
            utility.expectEqual({"name": "karan"}, {"name": "karan"})
            utility.expectEqual(getData.responsePayload, response)
            done();
        })
    })

    // it("List Unknowns", function(done) {
    //     utility.getRequest1(data.unknown, (response) => {
    //         console.log(JSON.stringify(response));
    //         done();
    //     })
    // })
});
function aa (callback) {
    return callback( () => {
        return callback( () => {
            
        })
    })
}