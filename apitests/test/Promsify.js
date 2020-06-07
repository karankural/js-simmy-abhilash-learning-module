

 function EligiblePromise(age) {
  return new Promise((resolve, reject) => {
    if(age>=18 && age<=30){
       
        resolve('Welcome , you are onboarded!!');
    }
    else if(age<18){
      resolve('Underage');
    } 
    else if(age>30){
      resolve('Overage');
    }
    else{
        reject('Error '+age);
    }
  })
}


// EligiblePromise(12).then((res)=>{
//   console.log(res)
// }).catch(err => {
//     console.log(err);
// })

// EligiblePromise(age).then((res) => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
  

// })

const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter your Name: ", function(name){
      console.log('Welcome, '+name+'!!')
         rl.question("Enter your Age:", function(age){
           age =  parseInt(age);
           const result =  EligiblePromise(age).then((res) => {
             console.log(res);
            //  done();
          }).catch((err) => {
            console.log(err);
                  
          })
          console.log(result);
         rl.close();
   })  
   
  });        
   rl.on("close", function() {
     
       process.exit(0);
   });



   