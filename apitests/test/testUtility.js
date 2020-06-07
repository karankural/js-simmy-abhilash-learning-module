    let should = require('chai').should;
    let request = require('supertest');
    let utility = require('../helper/utility')
    let baseurl= 'https://reqres.in';
    let Data= require('../helper/DataUtility.json');
   

    describe("Suite", () => {
            it('Get Test case', (done) => {
                utility.getRequest(baseurl,Data.api.get,(response)=>{
                console.log(JSON.stringify(response.body.data));
                utility.assertequal(response.status,Data.OK.status);
                
            })
            done();
                }) , 


            it('Get Test case using async await', async () => {

                    //  console.log( await utility.getRequest2());
                   let response=  await utility.getRequest2(baseurl,Data.api.get)
                    console.log(response.body.data);
                    utility.assertequal(response.status,Data.OK.status);  
                   
                    
                    }) , 

                    

            it('Post Suite case',(done)=>{
                utility.postRequest(baseurl,Data.api.post,(response)=>{
                    console.log(JSON.stringify(response.body));
                    utility.assertequal(response.status,Data.Created.status);
                    utility.assertequal(response.body.name, Data.PostJson.name);
                    utility.assertequal(response.body.job, Data.PostJson.job);
                
                })
                done();
            }),

            it('Post Test case using async await', async () => {

                //  console.log( await utility.getRequest2());
                let response = await utility.postRequest2(baseurl,Data.api.get)
                    console.log(response.body.data);
                    utility.assertequal(response.status,Data.Created.status);  
                }) , 



            it('Put Suite case',(done)=>{
                utility.putRequest(baseurl,Data.api.put,(response)=>{
                    console.log(JSON.stringify(response.body));
                    utility.assertequal(response.status,Data.OK.status);
                    utility.assertequal(response.body.name, Data.PostJson.name);
                    utility.assertequal(response.body.job, Data.PutJson.job);
                })
                done();
            })


        });