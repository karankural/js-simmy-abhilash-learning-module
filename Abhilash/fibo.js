var a, b, result;

a=0;
b=1;
result=b;
n= 10; //nth term

for (i=1; i<n;i++)
{
console.log(result)
result = a+b;
a=b;
b=result;

}
