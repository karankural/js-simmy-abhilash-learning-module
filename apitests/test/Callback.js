    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    

function Eligible(Age,a){
    
    if(Age>=18 && Age<=30){
                return a('Welcome , you are onboarded!!', true);
            }
            else{
                return a(Age, false);
            }
}
function Overage(Age,callback){
    if(Age>30)
    {
        return callback('Overage', true);
    }
    else{
        return callback(Age, false);
    }
    
}

function Underage(Age,callback){
    if(Age<18)
    {
        return callback('Underage', true);
    }
    else{
        return callback(Age, false);
    }
}

function test(age){
    Eligible(age,(elg, success)=>{
        if(success=== true) {
            console.log(elg);  
        }
        else{
            Underage(elg,(udag,success)=>{
                if(success=== true) {
                    console.log(udag);  
                }
                else{
                    Overage(udag,(value,success)=>{
                        if(success=== true) {
                            console.log(value); 
                        }  
                        else{
                            console.log("error");  
                        }
                    
                    })
                }
                
    
            })
        }
        
    })

}

rl.question("Enter your Name: ", function(name){
    console.log('Welcome, '+name+'!!')
       rl.question("Enter your Age:", function(age){
         age =  parseInt(age);
         test(age);
        
       rl.close();
 })  
});        

 rl.on("close", function() {
   
     process.exit(0);
 });
