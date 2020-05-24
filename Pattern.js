
function Pattern(n){
    var i, j,p;
    for(i=0; i<n; i++)
    {
        p='';
        for(j=0;j<=i;j++)
            { 
             p=p+('*'+' ');     
            }   
        console.log(p);  
    }  
}


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the length of the pattern to be print ", function(Number){
    Pattern(Number);
                
                rl.close();
            
});


rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
