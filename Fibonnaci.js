
let a,b,temp;
function fibonacci(a,b){
   for(i=0;i<10;i++){
    temp= a+b;
    a=b;
    b=temp;
    console.log(temp);
   }
   
}
fibonacci(0,1);
