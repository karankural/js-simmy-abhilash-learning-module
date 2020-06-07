let assert = require('chai').assert
let request = require('supertest');
let data= require('../helper/DataUtility.json');


module.exports= {
 getRequest : (url,endpoint,callback)=>{
        request(url)
        .get(endpoint)
        .end( function(err, res) {
        if (err) {
            return callback(err); 
        }
        return callback(res);
        
    });

},

getRequest2 : async (url,endpoint)=>{
     
     let res = await request(url)
    .get(endpoint)
    return res;

},

postRequest2 : async (url, endpoint)=>{
     
    let res = await request(url)
   .post(endpoint)
   .send(data.postData)
    .set('Accept', 'application/json')
   return res;

},

postRequest :(url,endpoint,callback)=> {
    request(url)
    .post(endpoint)
        .send(data.postData)
        .set('Accept', 'application/json') 
        .end(function(err, res) {
            if (err) {    
                return callback(err); 
            }
            // console.log('>>>>>>>>' + JSON.stringify(res.status))
            // assert.equal(res.status, 201, "Value not matched matched")  
            return callback(res);
        });
},
putRequest :(url,endpoint,callback)=> {
    request(url)
    .put(endpoint)
    .send(data.putData) 
        .end(function(err, res) {
            if (err) {    
                return callback(err); 
            }
            // assert(res.body.data.id).to.equal('2');
            return callback(res); 
        });
},

assertequal : (actualResponse, expectedResponse)=>{
    assert.equal(actualResponse,expectedResponse)
    },

    expectEqual: (acutalResponse, expectedResponse) => {
        expect(acutalResponse).to.eql(expectedResponse);
    }
}