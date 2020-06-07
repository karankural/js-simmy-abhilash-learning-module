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

  const readline = require("readline");
      const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
      });
      rl.question("Enter your Name: ", function(name){
        console.log('Welcome, '+name+'!!')
        rl.question("Enter your Age:", async function(age){
          age =  parseInt(age);
          const result = await EligiblePromise(age) 
          console.log(result);
           rl.close();
     })  
    });        
     rl.on("close", function() {
         process.exit(0);
     });