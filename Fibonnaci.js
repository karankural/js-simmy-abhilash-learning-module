
let temp;
function fibonacci(a,b,l){
   for(i=0;i<l;i++){
    temp= a+b;
    a=b;
    b=temp;
    console.log(temp);
   }
   
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the length of the fibonnaci to be print ", function(Number){
   rl.question("Enter the 1st initial of the series: ", function(a){
      rl.question("Enter the 2nd initial of the series: ", function(b){
        Number= parseInt(Number);
         a=parseInt(a);
        b =  parseInt(b);
       fibonacci(a,b,Number)
      rl.close();
   })
})          
});


rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
