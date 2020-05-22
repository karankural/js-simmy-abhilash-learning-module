const readline = require('readline');
const chai= require('chai');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first number : ', (answer1) => {
    rl.question('Please enter the second number : ', (answer2) => {
        add(Number(answer1),Number(answer2));
        rl.close();
    });
});

function add(a,b){
a += b;
console.log(`Answer is:${a}`)
}

  

 