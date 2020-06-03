const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your name : ', (answer1) => {
    console.log("Welcome "+ answer1)
    rl.question('Please enter your age : ', (answer2) => {
        if(!isNaN(answer2)){
       checkage(answer2, (output)=>{
        console.log(output);
       });
    }
    else{
        console.log("Please enter Number")
    }
       
        
        rl.close();
    });
});

function checkage(age ,callback)
{
    if (age <= 16){
     setTimeout(function(){ 
           return callback("Sorry, you are Underage");}, 10000); //Timeout put just to simulate that response 
                                                                //takes time and callback works

    }else if(age >16 && age <= 30){
    setTimeout(function(){  
         return callback("Welcome you are onboarded");}, 10000);
   
    }
    else if(age > 30){
        setTimeout(function(){ 
              return callback("Sorry,You are Overage");}, 10000);
       
    } 

}