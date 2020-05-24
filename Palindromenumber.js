
 function palindrome (Number){
    let OrgNumb = parseInt(Number);
    var remainder, reversenumb= 0;
while(Number !== 0){
    remainder = Number % 10;
    reversenumb = reversenumb * 10 + remainder;
    Number = parseInt(Number / 10);  
}
if(OrgNumb === reversenumb){
    console.log('Number is Palindrome '+reversenumb);
  }
 else{
    console.log('This number is not Palindrome '+OrgNumb); 

 }

 }
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number to check:  ", function(Number1){
    palindrome(Number1);
                
                rl.close();
            
});


rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});