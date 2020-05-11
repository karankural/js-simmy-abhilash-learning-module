// print 12321 

let palindrome = (number) => {
    let temp;
    let newNum =0;
    let x = number;

    while(number>0){
        temp = number%10;
        number = parseInt(number/10)
        newNum = newNum*10+temp;
    }
    if(newNum == x){ 
        console.log(x + " is palindrome")
    }
    else{ 
        console.log(x + " is not palindrome")
    }

    
}

palindrome(13231);