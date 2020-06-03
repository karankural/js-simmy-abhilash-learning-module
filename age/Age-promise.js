const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your name : ', (answer1) => {
    console.log("Welcome "+ answer1)
    rl.question('Please enter your age : ', (answer2) => {
        const p = new Promise((resolve,reject)=>{
      
            if (answer2 <= 16 && answer2 >0){
                return resolve ("Sorry, you are Underage");
                }else if(answer2 >16 && answer2 <= 30){
                return resolve(" Welcome you are onboarded");
                }
                else if(answer2 > 30){
                   return resolve("Sorry,You are Overage");
                } 

                
               
         else
            {
                return reject("Please Enter Number");
            }
       

           
       })

       p.then(output=>{
           console.log(output)
       })
       .catch(err=>{
           console.log("Error MSG => "+err);
           
       })
       
        
        rl.close();
    });
});

