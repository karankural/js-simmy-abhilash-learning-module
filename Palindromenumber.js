
 function palindrome (Number){
    let OrgNumb = Number;
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
    console.log('Number is not Palindrome '+OrgNumb); 
 }

 }
 palindrome(111);