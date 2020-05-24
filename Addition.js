
function add(a,b){
a=a+b;
console.log(a);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter the 1st number to add: ", function(a){
       rl.question("Enter the 2nd number to add:", function(b){
        
          a=parseInt(a);
         b =  parseInt(b);
        add(a,b)
       rl.close();
    
 })          
 });
 
 
 rl.on("close", function() {
     console.log("\nBYE BYE !!!");
     process.exit(0);
 });
 