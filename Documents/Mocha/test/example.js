//var assert = require('assert');

var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  sal: 10000,
  eyeColor: "blue"
  
};
console.log(person.age);
console.log(person.sal);
var emp ={
empName: "Ghanesh",
lastName: "Jain",
};
console.log(emp.lastName);
console.log(person.firstName);
let message = 'good nite';
console.log(message.length);
console.log(Math.random());
console.log(Math.floor(8.99));
let number = 25;
number = number + 12;
console.log(number);
let age = 7;
console.log('Tommy is ' + age + ' years old.');
console.log(`Tommy is ${50} years old.`);
const isTaskCompleted = true;

if (isTaskCompleted) {
  console.log('Task completed');
} else {
  console.log('Task incomplete');
}
let sum = ()=>{
  console.log('hello');
};
sum();
function multiply(num1,num2){
  return num1*num2;
}
console.log(multiply(8,9));
//fibonacci series Program
function fib(){
  let n = 10, t1 = 0, t2 = 1;
  for(let i=1;i<=n;++i){
    let sum = t1+t2;
    t1=t2;
    t2=sum;
     console.log(t1);
  }
};
fib();
// Palindrome No.
function Palindrome(){
  let n=454;
  let r,sum=0,temp;
  temp=n;
  while(n>0){
    r=n%10;
    sum=(sum*10)+r;
    n=n/10;
  }
  if (temp===sum){
    console.log("palindrome no."+sum);}
  else{
    console.log("Not palindrome"+temp);
  }
};
Palindrome();

for(let i=1; i<=5; i++){
  console.log("*".repeat(i));
} 





